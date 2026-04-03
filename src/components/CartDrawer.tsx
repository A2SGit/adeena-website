"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {
  const { isCartDrawerOpen, closeCartDrawer, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartDrawerOpen]);

  return (
    <>
      <div 
        className={`fixed inset-0 z-[90] bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${
          isCartDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCartDrawer}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-surface z-[100] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isCartDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="font-headline text-2xl text-primary">Your Cart</h2>
          <button 
            onClick={closeCartDrawer}
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-on-surface-variant text-center opacity-70">
              <span className="material-symbols-outlined text-6xl mb-4">shopping_bag</span>
              <p className="text-lg">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.name} className="flex gap-4 group">
                <div className="relative w-24 h-32 rounded-md overflow-hidden bg-surface-container border border-white/5">
                  <Image 
                    src={item.product.image} 
                    alt={item.product.alt} 
                    fill 
                    className="object-cover" 
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-lg line-clamp-1 text-on-surface">{item.product.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.product.name)}
                        className="text-on-surface-variant hover:text-error transition-colors"
                        aria-label="Remove item"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                    <p className="text-sm text-primary mt-1">{item.product.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-surface-container-high self-start rounded-full px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.product.name, item.quantity - 1)}
                      className="text-on-surface hover:text-primary transition-colors flex items-center justify-center w-6 h-6"
                      aria-label="Decrease quantity"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.name, item.quantity + 1)}
                      className="text-on-surface hover:text-primary transition-colors flex items-center justify-center w-6 h-6"
                      aria-label="Increase quantity"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-surface-container-lowest">
            <div className="flex justify-between items-center mb-6">
              <span className="text-on-surface-variant uppercase tracking-wider text-sm">Subtotal</span>
              <span className="font-headline text-2xl text-primary">₹ {cartTotal.toLocaleString("en-IN")}</span>
            </div>
            <Link 
              href="/checkout" 
              onClick={closeCartDrawer}
              className="w-full flex items-center justify-center py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
