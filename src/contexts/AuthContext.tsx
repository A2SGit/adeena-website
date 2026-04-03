"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type User = { name: string; email: string } | null;

interface AuthContextType {
  user: User;
  isAuthModalOpen: boolean;
  login: (name: string, email: string) => void;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const login = (name: string, email: string) => {
    setUser({ name, email });
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthModalOpen,
        login,
        logout,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
