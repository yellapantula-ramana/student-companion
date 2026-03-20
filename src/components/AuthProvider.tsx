import React, { createContext, useContext, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { User, registerUser, loginUser } from '../services/authService';

interface AuthContextType {
  user: User | null;
  isAuthReady: boolean;
  isLoggingIn: boolean;
  loginError: string | null;
  setLoginError: (error: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Check for stored session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setIsAuthReady(true);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      // Use deterministic UID based on email for login lookup
      // Note: In production, consider using UUIDs and storing email->uid mapping
      const uid = `user_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;

      // Login with password verification
      const userData = await loginUser(uid, password);

      if (!userData) {
        throw new Error('User not found. Please register first.');
      }

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error: any) {
      console.error('Login error:', error);
      setLoginError(error.message || 'Failed to sign in');
      throw error;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const register = async (email: string, password: string, displayName: string) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      // Generate unique UID using crypto.randomUUID for collision safety
      const uid = crypto.randomUUID();

      const userData = await registerUser({
        uid,
        email,
        display_name: displayName,
        password,
      });

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error: any) {
      console.error('Registration error:', error);
      setLoginError(error.message || 'Failed to register');
      throw error;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (!isAuthReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4 text-indigo-600">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="font-medium">Initializing Study Companion...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isAuthReady, isLoggingIn, loginError, setLoginError, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
