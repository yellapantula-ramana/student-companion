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
    // GET /syllabus/:id
    if (req.method === 'GET' && req.query.id) {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
      const result = await query('SELECT chapters FROM syllabus WHERE id = $1', [id]);
      
      if (result.rows.length > 0) {
        return res.status(200).json({ chapters: result.rows[0].chapters });
      } else {
        return res.status(404).json({ error: 'Syllabus not found' });
      }
    }

    // POST /syllabus
    if (req.method === 'POST') {
      const { id, subject, chapters } = req.body;
      
      await query(
        'INSERT INTO syllabus (id, subject, chapters) VALUES ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET subject = $2, chapters = $3, updated_at = CURRENT_TIMESTAMP',
        [id, subject, JSON.stringify(chapters)]
      );
      
      return res.status(200).json({ success: true, id });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Syllabus error:', error.message);
    res.status(500).json({ error: 'Failed to handle syllabus request', details: error.message });
  }
}
