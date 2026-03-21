import pg from 'pg';

const { Pool } = pg;

// Database configuration - supports both individual params and connection string
const pool = new Pool({
  // Try connection string first (for Neon/Vercel)
  connectionString: process.env.DATABASE_URL,
  // Fallback to individual params (for local development)
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  // SSL required for Neon/Vercel - use rejectUnauthorized: false for Neon
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
  // Optimize for serverless (Vercel)
  max: 1,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
});

// Graceful shutdown for serverless
pool.on('error', (err) => {
  console.error('Unexpected pool error:', err);
});

export const query = async (text: string, params?: any[]) => {
  try {
    const start = Date.now();
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text: text.substring(0, 50), duration, rows: result.rowCount });
    return result;
  } catch (error: any) {
    console.error('Query error:', error.message);
    throw error;
  }
};

// Run once per cold start to ensure tables exist
let migrated = false;
export async function ensureMigrated() {
  if (migrated) return;
  await query(`CREATE TABLE IF NOT EXISTS syllabus (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapters JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`);
  await query(`CREATE TABLE IF NOT EXISTS learning_paths (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapter TEXT NOT NULL,
    pdf_url TEXT,
    content TEXT,
    is_generated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`);
  await query(`CREATE TABLE IF NOT EXISTS practice_tests (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapter TEXT NOT NULL,
    test_id TEXT NOT NULL,
    questions JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`);
  await query(`CREATE TABLE IF NOT EXISTS users (
    uid TEXT PRIMARY KEY,
    email TEXT,
    display_name TEXT,
    photo_url TEXT,
    password_hash TEXT,
    role TEXT DEFAULT 'student',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`);
  await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT`);
  migrated = true;
  console.log('DB migration complete');
}

export default pool;
