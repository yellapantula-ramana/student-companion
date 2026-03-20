import type { VercelRequest, VercelResponse } from '@vercel/node';
import { query } from '../server/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Run migrations
    await query(`
      CREATE TABLE IF NOT EXISTS syllabus (
        id TEXT PRIMARY KEY,
        subject TEXT NOT NULL,
        chapters JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `);

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

    await query(`
      ALTER TABLE users
      ADD COLUMN IF NOT EXISTS password_hash TEXT
    `);

    res.status(200).json({ status: 'ok', message: 'Backend is running' });
  } catch (error: any) {
    console.error('Health check error:', error.message);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
