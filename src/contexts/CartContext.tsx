"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isCartDrawerOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
  clearCart: () => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  cartCount: number;
  cartTotal: number;
  toastMessage: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize from client-side local storage safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("adeena_cart");
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse cart storage", e);
        }
      }
    }
  }, []);

  // Sync to local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("adeena_cart", JSON.stringify(items));
    }
  }, [items]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.product.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productName: string) => {
    setItems((prev) => prev.filter((item) => item.product.name !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productName);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.product.name === productName ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const openCartDrawer = () => setIsCartDrawerOpen(true);
  const closeCartDrawer = () => setIsCartDrawerOpen(false);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate generic total based on price strings (like "₹ 15,999")
  const cartTotal = items.reduce((acc, item) => {
    const priceNum = parseInt(item.product.price.replace(/[^\d]/g, ""), 10);
    return acc + (isNaN(priceNum) ? 0 : priceNum) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartDrawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCartDrawer,
        closeCartDrawer,
        cartCount,
        cartTotal,
        toastMessage,
      }}
    >
      {children}
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-surface-container-high border border-primary/20 text-on-surface px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md">
            <span className="material-symbols-outlined text-green-400 text-xl">
              check_circle
            </span>
            <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
