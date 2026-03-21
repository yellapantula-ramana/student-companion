import type { VercelRequest, VercelResponse } from '@vercel/node';
import { query, ensureMigrated } from './db.js';

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
    await ensureMigrated();
    // GET /learning-paths?id=xxx
    if (req.method === 'GET' && req.query.id) {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

      console.log('Fetching learning path:', id);
      console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);

      const result = await query('SELECT * FROM learning_paths WHERE id = $1', [id]);

      if (result.rows.length > 0) {
        console.log('Found learning path:', result.rows[0].chapter);
        return res.status(200).json(result.rows[0]);
      } else {
        console.log('Learning path not found for id:', id);
        return res.status(404).json({
          error: 'Learning path not found',
          id: id,
          message: 'This chapter content has not been seeded yet'
        });
      }
    }

    // POST /learning-paths
    if (req.method === 'POST') {
      const { id, subject, chapter, content, pdf_url, is_generated } = req.body;

      await query(
        'INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO UPDATE SET subject = $2, chapter = $3, content = $4, pdf_url = $5, is_generated = $6, created_at = CURRENT_TIMESTAMP',
        [id, subject, chapter, content, pdf_url, is_generated]
      );

      return res.status(200).json({ success: true, id });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Learning paths error:', error.message);
    console.error('Stack:', error.stack);

    // Provide more helpful error message for common issues
    let errorMessage = error.message;
    if (error.message.includes('password')) {
      errorMessage = 'Database authentication failed. Check DATABASE_URL in Vercel environment variables.';
    } else if (error.message.includes('SSL')) {
      errorMessage = 'SSL connection failed. Ensure DATABASE_URL includes sslmode=require.';
    } else if (error.message.includes('connection')) {
      errorMessage = 'Database connection failed. Verify DATABASE_URL is correctly set.';
    }

    res.status(500).json({
      error: 'Failed to handle learning paths request',
      details: errorMessage,
      hint: 'Check Vercel environment variables and database connection'
    });
  }
}
