import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';
import { query } from './db.js';
import { runSeedContent } from './seed-content.js';

// Secure password hashing using bcrypt with salt rounds
const SALT_ROUNDS = 10;

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3002;

// Migration: Create tables if they don't exist
async function runMigrations() {
  try {
    // Create syllabus table
    await query(`
      CREATE TABLE IF NOT EXISTS syllabus (
        id TEXT PRIMARY KEY,
        subject TEXT NOT NULL,
        chapters JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create learning_paths table
    await query(`
      CREATE TABLE IF NOT EXISTS learning_paths (
        id TEXT PRIMARY KEY,
        subject TEXT NOT NULL,
        chapter TEXT NOT NULL,
        pdf_url TEXT,
        content TEXT,
        is_generated BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create practice_tests table
    await query(`
      CREATE TABLE IF NOT EXISTS practice_tests (
        id TEXT PRIMARY KEY,
        subject TEXT NOT NULL,
        chapter TEXT NOT NULL,
        test_id TEXT NOT NULL,
        questions JSONB NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create users table
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        uid TEXT PRIMARY KEY,
        email TEXT,
        display_name TEXT,
        photo_url TEXT,
        password_hash TEXT,
        role TEXT DEFAULT 'student',
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Add password_hash column if users table exists but column doesn't
    await query(`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS password_hash TEXT
    `);

    console.log('Migrations completed successfully');

    // Seed content (syllabus and learning paths)
    await runSeedContent();
  } catch (error) {
    console.error('Migration error:', error);
  }
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static files for seed-content images (SVG diagrams)
const seedContentDir = path.join(process.cwd(), 'seed-content');
app.use('/seed-content', express.static(seedContentDir));

// Static files for uploaded PDFs
const uploadsDir = path.join(process.cwd(), 'server', 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Syllabus routes
app.get('/api/syllabus/:id', async (req, res) => {
  try {
    console.log('Fetching syllabus for id:', req.params.id);
    const result = await query('SELECT chapters FROM syllabus WHERE id = $1', [req.params.id]);
    console.log('Query result:', result.rows);
    if (result.rows.length > 0) {
      res.json({ chapters: result.rows[0].chapters });
    } else {
      res.status(404).json({ error: 'Syllabus not found' });
    }
  } catch (error: any) {
    console.error('Error fetching syllabus:', error.message, error.stack);
    res.status(500).json({ error: 'Failed to fetch syllabus', details: error.message });
  }
});

app.post('/api/syllabus', async (req, res) => {
  try {
    const { id, subject, chapters } = req.body;
    await query(
      'INSERT INTO syllabus (id, subject, chapters) VALUES ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET subject = $2, chapters = $3, updated_at = CURRENT_TIMESTAMP',
      [id, subject, JSON.stringify(chapters)]
    );
    res.json({ success: true, id });
  } catch (error) {
    console.error('Error saving syllabus:', error);
    res.status(500).json({ error: 'Failed to save syllabus' });
  }
});

// Learning Paths routes
app.get('/api/learning-paths/:id', async (req, res) => {
  try {
    const result = await query('SELECT * FROM learning_paths WHERE id = $1', [req.params.id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Learning path not found' });
    }
  } catch (error) {
    console.error('Error fetching learning path:', error);
    res.status(500).json({ error: 'Failed to fetch learning path' });
  }
});

app.post('/api/learning-paths', async (req, res) => {
  try {
    const { id, subject, chapter, content, pdf_url, is_generated } = req.body;
    await query(
      'INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO UPDATE SET subject = $2, chapter = $3, content = $4, pdf_url = $5, is_generated = $6, created_at = CURRENT_TIMESTAMP',
      [id, subject, chapter, content, pdf_url, is_generated]
    );
    res.json({ success: true, id });
  } catch (error) {
    console.error('Error saving learning path:', error);
    res.status(500).json({ error: 'Failed to save learning path' });
  }
});

// PDF Upload route
app.post('/api/save-pdf', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const pdfUrl = `/uploads/${req.file.filename}`;
    res.json({ success: true, pdfUrl });
  } catch (error) {
    console.error('Error saving PDF:', error);
    res.status(500).json({ error: 'Failed to save PDF' });
  }
});

// Practice Tests routes
app.get('/api/practice-tests', async (req, res) => {
  try {
    const { subject, chapter } = req.query;
    const result = await query(
      'SELECT * FROM practice_tests WHERE subject = $1 AND chapter = $2',
      [subject, chapter]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching practice tests:', error);
    res.status(500).json({ error: 'Failed to fetch practice tests' });
  }
});

app.post('/api/practice-tests', async (req, res) => {
  try {
    const tests = req.body;
    for (const test of tests) {
      const { id, subject, chapter, test_id, questions } = test;
      await query(
        'INSERT INTO practice_tests (id, subject, chapter, test_id, questions) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO UPDATE SET subject = $2, chapter = $3, test_id = $4, questions = $5, created_at = CURRENT_TIMESTAMP',
        [id, subject, chapter, test_id, JSON.stringify(questions)]
      );
    }
    res.json({ success: true, count: tests.length });
  } catch (error) {
    console.error('Error saving practice tests:', error);
    res.status(500).json({ error: 'Failed to save practice tests' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Root route - API info
app.get('/', (req, res) => {
  res.json({
    message: 'Student Companion API',
    frontend: 'http://localhost:3000',
    endpoints: {
      health: '/api/health',
      syllabus: '/api/syllabus/:id',
      learningPaths: '/api/learning-paths/:id',
      auth: '/api/auth/*'
    }
  });
});

// Authentication routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { uid, email, display_name, photo_url, password } = req.body;
    if (!uid || !email || !password) {
      res.status(400).json({ error: 'UID, email, and password are required' });
      return;
    }
    const passwordHash = await hashPassword(password);
    const role = 'student';
    await query(
      'INSERT INTO users (uid, email, display_name, photo_url, password_hash, role) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (uid) DO UPDATE SET email = $2, display_name = $3, photo_url = $4, password_hash = $5',
      [uid, email, display_name || null, photo_url || null, passwordHash, role]
    );
    res.json({ success: true, user: { uid, email, display_name, photo_url, role } });
  } catch (error: any) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { uid, password } = req.body;
    if (!uid || !password) {
      res.status(400).json({ error: 'UID and password are required' });
      return;
    }
    const result = await query('SELECT * FROM users WHERE uid = $1', [uid]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found. Please register first.' });
      return;
    }
    const user = result.rows[0];
    const isPasswordValid = await verifyPassword(password, user.password_hash);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Invalid password' });
      return;
    }
    // Return user data without password_hash
    const { password_hash, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error: any) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Start server after migrations
if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  runMigrations().then(() => {
    app.listen(port, () => {
      console.log(`Backend server running at http://localhost:${port}`);
      console.log(`API endpoints available at http://localhost:${port}/api`);
    });
  });
} else if (process.env.VERCEL) {
  // In Vercel, migrations will run on the first request or can be triggered separately
  // For simplicity here, we'll run them but not block the export
  runMigrations().catch(err => console.error('Vercel migration error:', err));
}

export default app;
