import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { instagramPosts } from "@/data/instagram";
import CategoryCard from "@/components/CategoryCard";
import SectionHeader from "@/components/SectionHeader";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 botanical-overlay opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
          <div className="mb-4 md:mb-6 inline-block">
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl opacity-50">
              local_florist
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-headline italic text-primary tracking-tighter mb-3 md:mb-4">
            sarees-central Sarees
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-on-surface-variant mb-8 md:mb-12">
            Authentic South Indian Kanjeevarams & Silks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/collection"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-primary text-on-primary font-semibold rounded-md transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10 uppercase tracking-widest text-xs text-center"
            >
              Shop Collection
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20sarees-central%20Sarees."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 border border-outline/20 text-on-surface hover:border-primary/50 transition-all rounded-md uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Inquire via WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll Indicator - desktop only */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 hidden md:flex">
          <span className="text-[10px] uppercase tracking-widest">
            Discover
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </header>

      {/* Brand Story */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-24 bg-surface-container-low relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-primary/20">
              <Image
                src="/images/hero_saree_shot_1776250809393.png"
                alt="High-end fashion editorial shot of a traditional South Indian Kanjeevaram silk saree"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 md:w-48 h-36 md:h-48 border border-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm bg-background/30 hidden md:flex">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-headline italic text-primary">
                  9+
                </span>
                <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant">
                  Years of Heritage
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            {/* Mobile years badge */}
            <div className="flex items-center gap-3 md:hidden">
              <span className="text-2xl font-headline italic text-primary">
                9+
              </span>
              <span className="text-xs uppercase tracking-tighter text-on-surface-variant">
                Years of Heritage
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline italic text-on-surface leading-tight">
              Heritage Artistry for the Modern Silhouette
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-light">
              For nearly a decade, sarees-central Sarees has curated the finest
              Kancheepuram Silks, intricate Jamdani weaves, and regal bridal
              wear. Based in the heart of Hyderabad, we blend traditional South
              Indian handloom craftsmanship with contemporary elegance.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8 py-2 md:py-4">
              <div className="border-l border-primary/30 pl-4">
                <span className="block text-xl md:text-2xl font-headline italic text-primary">
                  4
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">
                  Hyderabad Boutiques
                </span>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <span className="block text-xl md:text-2xl font-headline italic text-primary">
                  Global
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">
                  Wholesale Network
                </span>
              </div>
            </div>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-4 text-primary group"
            >
              <span className="text-xs uppercase tracking-[0.2em]">
                Our Craftsmanship
              </span>
              <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Carousel */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeader
            eyebrow="Signature Drapes"
            title="House Favorites"
            center
          />
        </div>
        <Carousel />
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Curated Selections"
            title="Explore the Collection"
            linkText="View All Categories"
            linkHref="/collection"
          />

          {/* Mobile: Horizontal scroll carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} category={cat} />
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.title}
                category={cat}
                offset={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Social Atelier"
            title="Follow our Journey @sarees-centralSarees"
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {instagramPosts.map((post) => (
              <div
                key={post.alt}
                className="aspect-square overflow-hidden bg-surface-container grayscale hover:grayscale-0 transition-all duration-700 relative"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
