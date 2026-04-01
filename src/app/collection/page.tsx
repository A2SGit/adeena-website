"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { products, filterCategories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState("All Ensembles");

  const filteredProducts =
    activeFilter === "All Ensembles"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-20 md:pt-32 pb-20">
      {/* Editorial Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 md:mb-16 text-center">
        <h1 className="font-headline italic text-4xl sm:text-5xl md:text-7xl text-primary mb-3 md:mb-4">
          The Catalog
        </h1>
        <p className="text-on-surface-variant font-light tracking-widest text-xs sm:text-sm uppercase">
          Curated Elegance for the Modern Muse
        </p>
      </header>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[52px] md:top-[76px] z-30 bg-background/95 backdrop-blur-md border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex gap-6 md:gap-16 md:justify-center overflow-x-auto hide-scrollbar py-4 md:py-8">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap text-xs tracking-[0.2em] uppercase transition-colors flex-shrink-0 pb-1 ${
                  activeFilter === cat
                    ? "text-primary font-medium border-b border-primary/40"
                    : "text-on-surface-variant hover:text-primary font-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-8 md:pt-12 botanical-overlay">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              offset={i % 3 === 1}
            />
          ))}
        </div>
      </section>

      {/* Discover More */}
      <div className="flex justify-center mt-16 md:mt-32">
        <button className="group flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-on-surface-variant group-hover:text-primary transition-colors">
            Discover More
          </span>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </button>
      </div>
    </div>
  );
}
