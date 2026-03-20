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
  // SSL required for Neon/Vercel - always enforce SSL
  ssl: process.env.DATABASE_URL ? true : false,
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
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

export default pool;
