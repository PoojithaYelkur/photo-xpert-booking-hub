
import React, { createContext, useState, useEffect, useContext } from 'react';
import { User, AuthContextType } from '@/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // This would be replaced with actual API call in a real app
      // const response = await fetch('API_URL/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      
      // Simulating API response for demo
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          _id: '1',
          name: 'Demo User',
          email,
          role: email.includes('photographer') ? 'photographer' : 'user',
          createdAt: new Date().toISOString()
        } as User
      };
      
      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      
      setUser(mockResponse.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: any) => {
    try {
      setLoading(true);
      
      // This would be replaced with actual API call in a real app
      // const response = await fetch('API_URL/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData),
      // });
      
      // Simulating API response for demo
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          _id: '1',
          name: userData.name,
          email: userData.email,
          role: userData.role,
          createdAt: new Date().toISOString()
        } as User
      };
      
      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      
      setUser(mockResponse.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
