import type { Metadata } from "next";
import { stores } from "@/data/stores";
import StoreCard from "@/components/StoreCard";

export const metadata: Metadata = {
  title: "Stores",
  description:
    "Visit Siluva Sarees' 4 flagship boutiques in Surat — Surat Textile Market, Ring Road, Vesu, and Adajan. Experience luxury ethnic wear in person.",
};

export default function StoresPage() {
  return (
    <div className="pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full botanical-accent opacity-40 pointer-events-none hidden md:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-3 md:mb-4 block">
            Experience Excellence
          </span>
          <h1 className="font-headline italic text-4xl sm:text-5xl md:text-8xl text-on-background max-w-4xl leading-tight mb-4 md:mb-8">
            Visit Our <span className="text-primary">Flagship</span> Ateliers
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg max-w-xl font-light leading-relaxed">
            Step into the world of Siluva Sarees. Our physical stores are
            designed to provide an immersive sensory experience of luxury and
            heritage.
          </p>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24">
          {stores.map((store, i) => (
            <StoreCard key={store.name} store={store} offset={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Appointment Banner */}
      <section className="mx-4 sm:mx-6 md:mx-12 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto rounded-2xl md:rounded-3xl bg-surface-container-low border border-outline-variant/10 p-8 md:p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full botanical-accent opacity-10" />
          <h3 className="font-headline italic text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 relative z-10">
            Prefer a Private Viewing?
          </h3>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-6 md:mb-8 font-light relative z-10 text-sm md:text-base">
            Book a personalized styling session at any of our boutiques for a
            tailored experience with our head artisans.
          </p>
          <a
            href="https://wa.me/9154905787?text=Hi!%20I'd%20like%20to%20book%20a%20private%20styling%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block px-8 py-4 border border-primary text-primary rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300 font-label tracking-widest uppercase text-xs active:scale-95"
          >
            Request Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
