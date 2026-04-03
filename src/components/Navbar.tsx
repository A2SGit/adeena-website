"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/stores", label: "Stores" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, openCartDrawer } = useCart();
  const { user, openAuthModal, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 transition-all duration-300 ${
          isScrolled ? "bg-[#121212]/95 py-3" : "bg-[#121212]/80 py-4 md:py-6"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 max-w-full mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-headline italic text-primary tracking-tighter"
          >
            Adeena Collection
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.2em] font-light uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary border-b border-primary/50 pb-1"
                    : "text-stone-300 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-primary">
            {user ? (
              <button
                onClick={logout}
                className="hidden md:flex hover:scale-95 duration-200 p-1 group relative"
                aria-label="Logout"
              >
                <span className="material-symbols-outlined text-xl md:text-2xl">
                  logout
                </span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-surface-container-high px-2 py-1 rounded">
                  Logout
                </span>
              </button>
            ) : (
              <button
                onClick={openAuthModal}
                className="hidden md:flex hover:scale-95 duration-200 p-1"
                aria-label="Login"
              >
                <span className="material-symbols-outlined text-xl md:text-2xl">
                  person
                </span>
              </button>
            )}

            <button
              className="hover:scale-95 duration-200 p-1"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">
                search
              </span>
            </button>
            <button
              onClick={openCartDrawer}
              className="hover:scale-95 duration-200 relative p-1"
              aria-label="Shopping bag"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">
                shopping_bag
              </span>
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-on-primary text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-1 ml-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-headline italic tracking-wide transition-all duration-500 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${i * 80}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Auth and Cart */}
        <div className="flex flex-col items-center gap-6 mt-8">
          {user ? (
            <button
              onClick={() => {
                logout();
                setIsMenuOpen(false);
              }}
              className={`text-sm font-label uppercase tracking-widest text-primary transition-all duration-500 delay-300 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Sign Out from {user.name}
            </button>
          ) : (
            <button
              onClick={() => {
                openAuthModal();
                setIsMenuOpen(false);
              }}
              className={`text-sm font-label uppercase tracking-widest text-primary transition-all duration-500 delay-300 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile menu WhatsApp CTA */}
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20Adeena%20Collection%20products."
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-12 px-8 py-4 bg-[#25D366] text-white rounded-full font-label font-semibold text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-500 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          WhatsApp Us
        </a>
      </div>
    </>
  );
}
