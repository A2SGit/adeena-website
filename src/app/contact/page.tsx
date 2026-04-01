import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Adeena Collection for inquiries, custom orders, or wholesale collaborations. Message us on WhatsApp or submit the contact form.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden md:block opacity-10">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiG-uFgD-c7I6gqAg9ixdKXZkLswFdBy4lU-nLp8BoP-RWuIsCS9OEtssXUB7oH-vO4zf-ZZ7O72WicXPHHoCjZqi0LiaR5Qqq1tuXCBjZh3I68b2RJ6KZ1JucYr6ak74PqXf8wB_ijwN4p47UbvDIyVc4zv_2sxCb3enO4zZwP700s3vAij2cZ4zEJ3X4t87GDj2UVOUAGf-GAKoA5KKBxJAD_lP1ldGH6cWxDZG8lPSnd3AHvNOv6rDsdF6n8BwkHQNnI2o1OuIl"
          alt=""
          fill
          className="object-contain object-right opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start relative z-10">
        {/* Left Column: Content */}
        <div className="space-y-8 md:space-y-12">
          <header className="space-y-3 md:space-y-4">
            <span className="text-primary font-label text-sm tracking-[0.3em] uppercase">
              Connect With Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-headline italic text-on-background leading-tight">
              Your Elegance, Our Expertise.
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md font-light leading-relaxed">
              Inquiries, custom orders, or wholesale collaborations—reach out to
              our atelier. We ensure every thread speaks of luxury.
            </p>
          </header>

          {/* Primary CTA: WhatsApp */}
          <div className="pt-2 md:pt-4">
            <a
              href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20enquire%20about%20Adeena%20Collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 md:gap-4 px-6 sm:px-10 py-4 md:py-5 rounded-md gold-gradient text-on-primary-fixed font-semibold text-base md:text-lg hover:opacity-90 transition-all duration-300 group shadow-xl shadow-primary/10 active:scale-95"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat_bubble
              </span>
              <span>Message us on WhatsApp</span>
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 pt-6 md:pt-8 border-t border-outline-variant/20">
            <div className="space-y-2 md:space-y-3">
              <p className="text-primary font-label text-xs tracking-widest uppercase">
                Phone &amp; Inquiries
              </p>
              <p className="text-lg md:text-xl font-light">+91 98765 43210</p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <p className="text-primary font-label text-xs tracking-widest uppercase">
                Follow the Journey
              </p>
              <a
                href="#"
                className="text-lg md:text-xl font-light hover:text-primary transition-colors flex items-center gap-2"
              >
                @adeenacollection
                <span className="material-symbols-outlined text-sm">
                  north_east
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-surface-container-low p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl relative">
          <div className="absolute -top-4 -left-4 w-20 md:w-24 h-20 md:h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-xl pointer-events-none hidden md:block" />
          <h2 className="text-xl md:text-2xl font-headline italic mb-6 md:mb-8">
            Send a Message
          </h2>
          <form className="space-y-6 md:space-y-8">
            <div className="relative group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                Full Name
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary placeholder:text-stone-700 text-on-surface transition-all text-base"
                placeholder="Zoya Ahmed"
                type="text"
              />
            </div>
            <div className="relative group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                Phone Number
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary placeholder:text-stone-700 text-on-surface transition-all text-base"
                placeholder="+91 00000 00000"
                type="tel"
              />
            </div>
            <div className="relative group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                Message
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary placeholder:text-stone-700 text-on-surface transition-all resize-none text-base"
                placeholder="Tell us about your requirements..."
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 border border-primary/40 text-primary uppercase tracking-[0.3em] font-label text-xs hover:bg-primary hover:text-on-primary transition-all duration-500 active:scale-[0.98]"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
