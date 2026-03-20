import type { VercelRequest, VercelResponse } from '@vercel/node';
import { query } from '../../server/db';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Register request received:', req.body);

    const { uid, email, display_name, photo_url, password } = req.body;

    if (!uid || !email || !password) {
      return res.status(400).json({ error: 'UID, email, and password are required' });
    }

    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const role = 'student';

    await query(
      'INSERT INTO users (uid, email, display_name, photo_url, password_hash, role) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (uid) DO UPDATE SET email = $2, display_name = $3, photo_url = $4, password_hash = $5',
      [uid, email, display_name || null, photo_url || null, passwordHash, role]
    );

    console.log('User registered successfully:', uid);
    res.status(200).json({
      success: true,
      user: { uid, email, display_name, photo_url, role }
    });
  } catch (error: any) {
    console.error('Register error:', error.message, error.stack);
    res.status(500).json({ error: 'Failed to register user', details: error.message });
  }
}
