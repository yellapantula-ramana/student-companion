import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { parse } from 'dotenv';

// Manually load and parse .env file (only in local development)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  try {
    const envFile = readFileSync('.env', 'utf-8');
    const parsed = parse(envFile);
    Object.assign(process.env, parsed);
  } catch (e) {
    console.warn('Could not load .env file:', e);
  }
}

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
  // SSL required for Neon (always enabled when DATABASE_URL is set)
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
  // Optimize for serverless (Vercel)
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Graceful shutdown for serverless
if (process.env.VERCEL) {
  process.on('exit', () => {
    pool.end();
  });
}

export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
