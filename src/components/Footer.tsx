import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-16 md:pt-20 pb-24 md:pb-10 border-t border-outline/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
          <div className="text-xl font-headline text-primary italic">
            Siluva Sarees
          </div>
          <p className="text-sm font-light text-on-surface-variant leading-relaxed">
            Your destination for premium wholesale and retail sarees from Surat, Gujarat. A legacy of 9+ years.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest">
                Instagram
              </span>
            </a>
            <a
              href="https://wa.me/9154905787"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
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
          <ul className="space-y-2 md:space-y-3 text-sm font-light text-on-surface-variant">
            <li>
              <Link
                href="/stores"
                className="hover:text-primary transition-colors"
              >
                Surat Textile Market, Surat
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="hover:text-primary transition-colors"
              >
                Ring Road, Surat
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="hover:text-primary transition-colors"
              >
                Vesu, Surat
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="hover:text-primary transition-colors"
              >
                Adajan, Surat
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2 md:space-y-3 text-sm font-light text-on-surface-variant">
            <li>
              <Link
                href="/collection"
                className="hover:text-primary transition-colors"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/wholesale"
                className="hover:text-primary transition-colors"
              >
                Wholesale Inquiry
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors"
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
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
            Join for Exclusive Access
          </p>
          <div className="relative max-w-sm">
            <input
              className="w-full bg-transparent border-b border-outline/30 py-2 text-xs focus:border-primary outline-none transition-colors text-on-surface placeholder:text-surface-container-highest"
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
      <div className="mt-12 md:mt-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 border-t border-outline/10 pt-8 md:pt-10">
        <p className="text-[10px] font-light text-on-surface-variant uppercase tracking-widest text-center">
          © 2024 Siluva Sarees. Crafted for Elegance.
        </p>
        <div className="flex items-center gap-8">
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">
            Designed by a2slabs.com
          </span>
        </div>
      </div>
    </footer>
  );
}

