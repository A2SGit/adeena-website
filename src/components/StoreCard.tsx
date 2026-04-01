import Image from "next/image";
import type { Store } from "@/data/stores";

interface StoreCardProps {
  store: Store;
  offset?: boolean;
}

export default function StoreCard({ store, offset }: StoreCardProps) {
  return (
    <div className={`flex flex-col group ${offset ? "lg:mt-24" : ""}`}>
      {/* Store Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-surface-container mb-6 md:mb-8">
        <Image
          src={store.image}
          alt={store.imageAlt}
          fill
          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>

      {/* Store Info */}
      <div className="px-1 md:px-2">
        <div className="flex justify-between items-end mb-3 md:mb-4">
          <h2 className="font-headline italic text-3xl md:text-4xl text-primary">
            {store.name}
          </h2>
          <span className="text-primary/40 font-label tracking-widest text-[10px] md:text-xs uppercase">
            {store.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Address & Hours */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1 flex-shrink-0">
                location_on
              </span>
              <p className="text-on-surface-variant font-light text-sm">
                {store.address}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1 flex-shrink-0">
                schedule
              </span>
              <p className="text-on-surface-variant font-light text-sm whitespace-pre-line">
                {store.hours}
              </p>
            </div>
          </div>

          {/* Map + CTA */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="rounded-xl border border-outline-variant/30 h-28 md:h-32 overflow-hidden relative">
              <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center text-primary/20">
                <span className="material-symbols-outlined text-4xl">map</span>
              </div>
              <Image
                src={store.mapImage}
                alt={`Map of ${store.name}`}
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 md:py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed text-center rounded-xl font-semibold tracking-widest uppercase text-xs hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              Contact Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
