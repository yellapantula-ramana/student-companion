import type { VercelRequest, VercelResponse } from '@vercel/node';
import { query } from './db.js';

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
    // GET /learning-paths?id=xxx
    if (req.method === 'GET' && req.query.id) {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
      const result = await query('SELECT * FROM learning_paths WHERE id = $1', [id]);
      
      if (result.rows.length > 0) {
        return res.status(200).json(result.rows[0]);
      } else {
        return res.status(404).json({ error: 'Learning path not found' });
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
    res.status(500).json({ error: 'Failed to handle learning paths request', details: error.message });
  }
}
