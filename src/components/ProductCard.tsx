import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  offset?: boolean;
}

export default function ProductCard({ product, offset }: ProductCardProps) {
  const message = encodeURIComponent(
    `Hi! I'm interested in "${product.name}" (${product.price}) from Adeena Collection.`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

  return (
    <div
      className={`group relative aspect-[3/4] overflow-hidden bg-surface-container-low rounded-lg ${
        offset ? "md:translate-y-12" : ""
      }`}
    >
      <Image
        src={product.image}
        alt={product.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Always-visible mobile overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent md:from-stone-950 md:via-transparent md:to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Product info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8 flex flex-col justify-end md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:border md:border-primary/0 md:group-hover:border-primary/20">
        <h3 className="font-headline text-base sm:text-lg md:text-2xl text-primary mb-0.5 md:mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-on-surface-variant text-xs sm:text-sm mb-2 md:mb-6">
          {product.price}
        </p>

        {/* WhatsApp CTA - visible on hover (desktop) or always (mobile) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-none flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">chat</span>
          <span className="hidden sm:inline">Enquire on WhatsApp</span>
          <span className="sm:hidden">Enquire</span>
        </a>
      </div>
    </div>
  );
}
