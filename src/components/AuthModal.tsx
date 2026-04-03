"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useState, FormEvent } from "react";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      login("Guest User", email);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={closeAuthModal}
    >
      <div 
        className="relative bg-surface p-8 mx-4 w-full max-w-md rounded-2xl border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h2 id="auth-modal-title" className="font-headline text-3xl text-primary text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs text-on-surface-variant uppercase tracking-widest">Or</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <button
          onClick={() => login("Google User", "auth@google.com")}
          className="w-full mt-6 py-3 border border-white/10 text-on-surface rounded-lg flex items-center justify-center gap-3 hover:bg-surface-container-high transition-colors"
        >
          <span className="font-medium">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
