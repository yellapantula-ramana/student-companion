import type { IncomingMessage, ServerResponse } from 'http';
import cors from 'cors';
import { query } from '../server/db.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

// CORS middleware
const corsMiddleware = cors();

// Extend IncomingMessage for Vercel
interface VercelRequest extends IncomingMessage {
  body?: any;
  query?: any;
  url?: string;
}

interface VercelResponse extends ServerResponse {
  status(code: number): VercelResponse;
  json(data: any): void;
}

// Helper to run middleware
const runMiddleware = (req: VercelRequest, res: VercelResponse, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

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
  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  }
}

// Run migrations on first request
let migrationsRun = false;
async function ensureMigrations() {
  if (!migrationsRun) {
    await runMigrations();
    migrationsRun = true;
  }
}

// Health check endpoint
export default async function handler(req: VercelRequest, res: VercelResponse) {
  await runMiddleware(req, res, corsMiddleware);
  await ensureMigrations();

  // Vercel strips /api prefix, so we handle routes without it
  const url = req.url || '';
  // Remove query string for path matching
  const path = url.split('?')[0];

  try {
    // Health check: /api/health -> /health
    if (req.method === 'GET' && path === '/health') {
      return res.status(200).json({ status: 'ok', message: 'Backend is running' });
    }

    // Root API info
    if (req.method === 'GET' && path === '/') {
      return res.status(200).json({
        message: 'Student Companion API',
        endpoints: {
          health: '/api/health',
          syllabus: '/api/syllabus/:id',
          learningPaths: '/api/learning-paths/:id',
          auth: '/api/auth/*'
        }
      });
    }

    // Syllabus routes: /api/syllabus/:id -> /syllabus/:id
    if (path.startsWith('/syllabus/')) {
      const id = path.split('/').pop();
      if (req.method === 'GET') {
        const result = await query('SELECT chapters FROM syllabus WHERE id = $1', [id]);
        if (result.rows.length > 0) {
          return res.status(200).json({ chapters: result.rows[0].chapters });
        } else {
          return res.status(404).json({ error: 'Syllabus not found' });
        }
      }
    }

    if (path === '/syllabus' && req.method === 'POST') {
      const { id, subject, chapters } = req.body || {};
      await query(
        'INSERT INTO syllabus (id, subject, chapters) VALUES ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET subject = $2, chapters = $3, updated_at = CURRENT_TIMESTAMP',
        [id, subject, JSON.stringify(chapters)]
      );
      return res.status(200).json({ success: true, id });
    }

    // Learning Paths routes: /api/learning-paths/:id -> /learning-paths/:id
    if (path.startsWith('/learning-paths/')) {
      const id = path.split('/').pop();
      if (req.method === 'GET') {
        const result = await query('SELECT * FROM learning_paths WHERE id = $1', [id]);
        if (result.rows.length > 0) {
          return res.status(200).json(result.rows[0]);
        } else {
          return res.status(404).json({ error: 'Learning path not found' });
        }
      }
    }

    if (path === '/learning-paths' && req.method === 'POST') {
      const { id, subject, chapter, content, pdf_url, is_generated } = req.body || {};
      await query(
        'INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO UPDATE SET subject = $2, chapter = $3, content = $4, pdf_url = $5, is_generated = $6, created_at = CURRENT_TIMESTAMP',
        [id, subject, chapter, content, pdf_url, is_generated]
      );
      return res.status(200).json({ success: true, id });
    }

    // Practice Tests routes
    if (path === '/practice-tests' && req.method === 'GET') {
      const { subject, chapter } = req.query || {};
      const result = await query(
        'SELECT * FROM practice_tests WHERE subject = $1 AND chapter = $2',
        [subject, chapter]
      );
      return res.status(200).json(result.rows);
    }

    if (path === '/practice-tests' && req.method === 'POST') {
      const tests = req.body || [];
      for (const test of tests) {
        const { id, subject, chapter, test_id, questions } = test;
        await query(
          'INSERT INTO practice_tests (id, subject, chapter, test_id, questions) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO UPDATE SET subject = $2, chapter = $3, test_id = $4, questions = $5, created_at = CURRENT_TIMESTAMP',
          [id, subject, chapter, test_id, JSON.stringify(questions)]
        );
      }
      return res.status(200).json({ success: true, count: tests.length });
    }

    // Auth routes
    if (path === '/auth/register' && req.method === 'POST') {
      const { uid, email, display_name, photo_url, password } = req.body || {};
      if (!uid || !email || !password) {
        return res.status(400).json({ error: 'UID, email, and password are required' });
      }
      const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
      const role = 'student';
      await query(
        'INSERT INTO users (uid, email, display_name, photo_url, password_hash, role) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (uid) DO UPDATE SET email = $2, display_name = $3, photo_url = $4, password_hash = $5',
        [uid, email, display_name || null, photo_url || null, passwordHash, role]
      );
      return res.status(200).json({ success: true, user: { uid, email, display_name, photo_url, role } });
    }

    if (path === '/auth/login' && req.method === 'POST') {
      const { uid, password } = req.body || {};
      if (!uid || !password) {
        return res.status(400).json({ error: 'UID and password are required' });
      }
      const result = await query('SELECT * FROM users WHERE uid = $1', [uid]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User not found. Please register first.' });
      }
      const user = result.rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password_hash);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      const { password_hash, ...userWithoutPassword } = user;
      return res.status(200).json(userWithoutPassword);
    }

    // 404 for unknown routes
    return res.status(404).json({ error: 'Not found' });

  } catch (error: any) {
    console.error('API Error:', error.message, error.stack);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
