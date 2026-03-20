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
    console.log('Login request received:', req.body);

    const { uid, password } = req.body;

    if (!uid || !password) {
      return res.status(400).json({ error: 'UID and password are required' });
    }

    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);

    const result = await query('SELECT * FROM users WHERE uid = $1', [uid]);

    if (result.rows.length === 0) {
      console.log('User not found:', uid);
      return res.status(404).json({ error: 'User not found. Please register first.' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      console.log('Invalid password for user:', uid);
      return res.status(401).json({ error: 'Invalid password' });
    }

    console.log('Login successful:', uid);
    const { password_hash, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error: any) {
    console.error('Login error:', error.message, error.stack);
    res.status(500).json({ error: 'Failed to login', details: error.message });
  }
}
