import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 w-full pt-16 md:pt-20 pb-24 md:pb-10 border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
          <div className="text-xl font-headline text-primary italic">
            Adeena Collection
          </div>
          <p className="text-sm font-light text-stone-400 leading-relaxed">
            Your destination for premium Pakistani lawn, Kashmiri embroidery,
            and luxury ethnic wear in Hyderabad. A legacy of 9+ years.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest">
                Instagram
              </span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest">
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Store Locations */}
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">
            Store Locations
          </h4>
          <ul className="space-y-2 md:space-y-3 text-sm font-light text-stone-400">
            <li>
              <Link
                href="/stores"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Tolichowki, Hyderabad
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Nampally, Hyderabad
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Charminar, Hyderabad
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Abids, Hyderabad
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2 md:space-y-3 text-sm font-light text-stone-400">
            <li>
              <Link
                href="/collection"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/wholesale"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Wholesale Inquiry
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-stone-500 hover:text-primary transition-colors"
              >
                Shipping Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
          <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">
            Newsletter
          </h4>
          <p className="text-[10px] text-stone-500 uppercase tracking-widest">
            Join for Exclusive Access
          </p>
          <div className="relative max-w-sm">
            <input
              className="w-full bg-transparent border-b border-white/10 py-2 text-xs focus:border-primary outline-none transition-colors text-on-surface placeholder:text-stone-700"
              placeholder="Email Address"
              type="email"
            />
            <button className="absolute right-0 bottom-2" aria-label="Subscribe">
              <span className="material-symbols-outlined text-primary text-lg">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 md:mt-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 border-t border-white/5 pt-8 md:pt-10">
        <p className="text-[10px] font-light text-stone-600 uppercase tracking-widest text-center">
          © 2024 Adeena Collection. Crafted for Elegance.
        </p>
        <div className="flex items-center gap-8">
          <span className="text-[10px] text-stone-700 uppercase tracking-widest">
            Designed by Studio Atelier
          </span>
        </div>
      </div>
    </footer>
  );
}
