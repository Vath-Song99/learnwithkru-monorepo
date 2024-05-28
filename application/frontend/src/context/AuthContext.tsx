// AuthContext.tsx
"use client"
import { AuthModel } from '@/@types/users/users';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: AuthModel | null; // Adjust the type based on your user object structure
}

interface AuthContextType {
  authState: AuthState;
  login: (user: AuthModel) => void; // Adjust the type based on your user object structure
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: false, user: null });

  const login = (user: AuthModel | null) => {
    setAuthState({ isAuthenticated: true, user });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
  };

  useEffect(() =>{
const userDataString = JSON.stringify(authState.user);

// Store the JSON string in localStorage under a key (e.g., 'user')
localStorage.setItem('user', userDataString);
  },[authState])
  
  console.log("Auth state: ",authState)
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
