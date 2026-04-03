"use client";

import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";

type CheckoutStep = "shipping" | "payment" | "success";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("shipping");
  const [isLoading, setIsLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const shippingCost = cartTotal > 0 ? 500 : 0;
  const finalTotal = cartTotal + shippingCost;

  useEffect(() => {
    if (items.length === 0 && step !== "success") {
      window.location.href = "/";
    }
  }, [items, step]);

  const handleShippingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOrderNumber(`AC-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep("success");
      clearCart();
    }, 2000);
  };

  if (step === "success") {
    return (
      <div className="min-h-[80vh] pt-24 pb-12 px-4 flex items-center justify-center bg-background">
        <div className="max-w-md w-full text-center space-y-6 bg-surface-container p-8 rounded-2xl border border-white/5 shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <h1 className="font-headline text-3xl text-primary">Order Confirmed</h1>
          <p className="text-on-surface-variant">
            Thank you for your purchase! Your order number is <strong className="text-primary">{orderNumber}</strong>. We've sent a confirmation email sequence to your inbox.
          </p>
          <div className="pt-8 text-left">
            <Link 
              href="/collection" 
              className="w-full flex items-center justify-center py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity"
            >
              Return to Catalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Prevent render if navigating away
  if (items.length === 0) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-8 relative z-10">
        <Link href="/collection" className="text-sm font-medium text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors w-fit">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to collection
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <h1 className="font-headline text-3xl md:text-4xl text-primary">Checkout</h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-4 text-xs font-label uppercase tracking-widest border-b border-white/10 pb-4">
            <span className={step === "shipping" ? "text-primary font-bold" : "text-on-surface-variant"}>Shipping</span>
            <span className="text-on-surface-variant">/</span>
            <span className={step === "payment" ? "text-primary font-bold" : "text-on-surface-variant"}>Payment</span>
          </div>

          <div className="bg-surface-container shadow-2xl rounded-2xl p-6 md:p-8 border border-white/5">
            {step === "shipping" && (
              <form onSubmit={handleShippingSubmit} className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                <h2 className="text-xl font-headline text-on-surface mb-6">Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">First Name</label>
                    <input type="text" required className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors focus:outline-none" value={shipping.firstName} onChange={e => setShipping({...shipping, firstName: e.target.value})} />
                   </div>
                   <div>
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">Last Name</label>
                    <input type="text" required className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors focus:outline-none" value={shipping.lastName} onChange={e => setShipping({...shipping, lastName: e.target.value})} />
                   </div>
                   <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">Email</label>
                    <input type="email" required className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors focus:outline-none" value={shipping.email} onChange={e => setShipping({...shipping, email: e.target.value})} />
                   </div>
                   <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">Address</label>
                    <input type="text" required className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors focus:outline-none" value={shipping.address} onChange={e => setShipping({...shipping, address: e.target.value})} />
                   </div>
                   <div>
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">City</label>
                    <input type="text" required className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors focus:outline-none" value={shipping.city} onChange={e => setShipping({...shipping, city: e.target.value})} />
                   </div>
                   <div>
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">Postal Code</label>
                    <input type="text" required className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors focus:outline-none" value={shipping.postalCode} onChange={e => setShipping({...shipping, postalCode: e.target.value})} />
                   </div>
                </div>
                <button type="submit" className="w-full mt-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity">
                  Continue to Payment
                </button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-headline text-on-surface">Payment Method</h2>
                  <button type="button" onClick={() => setStep("shipping")} className="text-sm text-primary hover:underline">Edit Shipping</button>
                </div>
                
                {/* Mock Card Input */}
                <div className="p-6 border border-primary/30 rounded-xl bg-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <span className="material-symbols-outlined text-6xl">credit_card</span>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-primary mb-1">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-surface-container border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors font-mono tracking-widest" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-primary mb-1">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-surface-container border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors font-mono tracking-widest" required />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-primary mb-1">CVV</label>
                        <input type="password" placeholder="123" className="w-full bg-surface-container border border-white/10 rounded-lg px-4 py-3 focus:border-primary transition-colors font-mono tracking-widest" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-white/10 rounded-xl bg-surface-container-high opacity-60 pointer-events-none">
                   <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined">qr_code_scanner</span>
                     <span className="text-sm font-medium">UPI / QR (Currently Unavailable)</span>
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full mt-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">lock</span>
                      <span>Pay ₹{finalTotal.toLocaleString("en-IN")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-96">
          <div className="bg-surface-container-high rounded-2xl p-6 border border-white/5 sticky top-28 shadow-xl">
            <h3 className="font-headline text-lg mb-6 text-on-surface">Order Summary</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.product.name} className="flex gap-4">
                  <div className="relative w-16 h-20 rounded bg-surface-container overflow-hidden">
                    <Image src={item.product.image} alt={item.product.alt} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1 py-1">
                    <h4 className="text-sm font-medium line-clamp-1">{item.product.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Qty: {item.quantity}</p>
                    <p className="text-xs text-primary mt-1">{item.product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Subtotal</span>
                <span>₹ {cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Shipping</span>
                <span>₹ {shippingCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between font-bold text-lg text-primary">
                <span>Total</span>
                <span>₹ {finalTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background botanical accent for layout depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 botanical-bg" />
    </div>
  );
}
