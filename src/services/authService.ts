// Use relative path - Vite proxy will forward /api to backend server
const API_BASE_URL = '/api';

export interface User {
  uid: string;
  email: string;
  display_name: string | null;
  photo_url: string | null;
  role: string;
}

export async function registerUser(userData: {
  uid: string;
  email: string;
  display_name?: string;
  photo_url?: string;
  password: string;
}): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('Register error:', response.status, text);
    try {
      const error = JSON.parse(text);
      throw new Error(error.error || 'Failed to register user');
    } catch {
      throw new Error(`Failed to register: ${response.status}`);
    }
  }

  const data = await response.json();
  return data.user;
}

export async function loginUser(uid: string, password: string): Promise<User | null> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uid, password }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('Login error:', response.status, text);
    try {
      const error = JSON.parse(text);
      if (response.status === 404) {
        throw new Error('User not found. Please register first.');
      }
      if (response.status === 401) {
        throw new Error('Invalid password');
      }
      throw new Error(error.error || 'Failed to login');
    } catch (e: any) {
      if (e.message.includes('User not found') || e.message.includes('Invalid password')) {
        throw e;
      }
      throw new Error(`Login failed: ${response.status}`);
    }
  }

  return await response.json();
}
