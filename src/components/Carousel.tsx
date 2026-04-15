"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // We'll showcase the first 5 products
  const showcaseProducts = products.slice(0, 5);

  return (
    <div className="w-full relative group pb-8">
      {/* Scroll controls - visible on hove on desktop */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-primary/20 items-center justify-center transition-all md:opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex hover:bg-surface hover:scale-105 active:scale-95 text-primary`}
        aria-label="Scroll left"
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-primary/20 items-center justify-center transition-all md:opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex hover:bg-surface hover:scale-105 active:scale-95 text-primary`}
        aria-label="Scroll right"
      >
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>

      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-4 md:gap-6 hide-scrollbar snap-x snap-mandatory px-4 md:px-12 py-4"
      >
        {showcaseProducts.map((product, index) => (
          <Link
            href="/collection"
            key={index}
            className="flex-none w-[280px] md:w-[400px] aspect-[3/4] relative snap-start group/card rounded-xl overflow-hidden shadow-lg border border-primary/10 transition-transform hover:-translate-y-2 duration-500 hover:shadow-xl"
          >
            <Image
              src={product.image}
              alt={product.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover/card:scale-105"
              sizes="(max-width: 768px) 280px, 400px"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
            
            {/* Content Plate */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
              <span className="text-secondary text-xs uppercase tracking-[0.2em] mb-2 px-3 py-1 bg-background/50 backdrop-blur-md rounded-full border border-secondary/20">
                {product.category}
              </span>
              <h3 className="text-xl md:text-2xl font-headline italic text-on-surface mb-1 drop-shadow-md">
                {product.name}
              </h3>
              <div className="flex flex-col items-center overflow-hidden h-6 mt-1">
                <span className="text-on-surface-variant group-hover/card:-translate-y-full transition-transform duration-500 font-light tracking-wider">
                  {product.price}
                </span>
                <span className="text-primary group-hover/card:-translate-y-full transition-transform duration-500 font-medium text-sm tracking-widest uppercase">
                  Discover
                </span>
              </div>
            </div>
          </Link>
        ))}
        {/* Fill empty space at end to allow the last item to snap to center/left */}
        <div className="flex-none w-[10px] md:w-[20px]" />
      </div>
    </div>
  );
}
