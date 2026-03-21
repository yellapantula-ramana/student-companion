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
    // GET /practice-tests?subject=xxx&chapter=yyy
    if (req.method === 'GET') {
      const { subject, chapter } = req.query;
      
      if (!subject || !chapter) {
        return res.status(400).json({ error: 'subject and chapter are required' });
      }
      
      const subjectVal = Array.isArray(subject) ? subject[0] : subject;
      const chapterVal = Array.isArray(chapter) ? chapter[0] : chapter;
      
      const result = await query(
        'SELECT * FROM practice_tests WHERE subject = $1 AND chapter = $2',
        [subjectVal, chapterVal]
      );
      
      return res.status(200).json(result.rows);
    }

    // POST /practice-tests
    if (req.method === 'POST') {
      const tests = req.body;
      
      for (const test of tests) {
        const { id, subject, chapter, test_id, questions } = test;
        await query(
          'INSERT INTO practice_tests (id, subject, chapter, test_id, questions) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO UPDATE SET subject = $2, chapter = $3, test_id = $4, questions = $5, created_at = CURRENT_TIMESTAMP',
          [id, subject, chapter, test_id, JSON.stringify(questions)]
        );
      }
      
      return res.status(200).json({ success: true, count: tests.length });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Practice tests error:', error.message);
    res.status(500).json({ error: 'Failed to handle practice tests request', details: error.message });
  }
}
