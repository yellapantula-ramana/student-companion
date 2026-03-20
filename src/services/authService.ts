// Use relative path - Vite proxy will forward /api to backend server
const API_BASE_URL = '/api';

export interface User {
  uid: string;
  email: string;
  display_name: string | null;
  photo_url: string | null;
  role: string;
}

async function parseJsonOrText(response: Response): Promise<any> {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    // Return as text if not JSON (likely an HTML error page)
    return { error: `Server returned: ${response.status} - ${text.substring(0, 200)}` };
  }
}

export async function registerUser(userData: {
  uid: string;
  email: string;
  display_name?: string;
  photo_url?: string;
  password: string;
}): Promise<User> {
  console.log('Registering user:', userData.email);

  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  console.log('Register response status:', response.status);

  const data = await parseJsonOrText(response);
  console.log('Register response data:', data);

  if (!response.ok) {
    throw new Error(data.error || 'Failed to register user');
  }

  return data.user;
}

export async function loginUser(uid: string, password: string): Promise<User | null> {
  console.log('Logging in user:', uid);

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uid, password }),
  });

  console.log('Login response status:', response.status);

  const data = await parseJsonOrText(response);
  console.log('Login response data:', data);

  if (!response.ok) {
    if (data.error?.includes('User not found')) {
      throw new Error('User not found. Please register first.');
    }
    if (data.error?.includes('Invalid password')) {
      throw new Error('Invalid password');
    }
    throw new Error(data.error || 'Failed to login');
  }

  return data;
}
