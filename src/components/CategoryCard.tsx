import Image from "next/image";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  offset?: boolean;
}

export default function CategoryCard({ category, offset }: CategoryCardProps) {
  return (
    <div
      className={`group relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container flex-shrink-0 w-[260px] sm:w-[280px] md:w-auto snap-start ${
        offset ? "md:translate-y-8" : ""
      }`}
    >
      <Image
        src={category.image}
        alt={category.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 260px, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
        <h4 className="text-lg md:text-xl font-headline italic text-primary mb-1">
          {category.title}
        </h4>
        <p className="text-[10px] text-on-surface-variant tracking-widest uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          {category.subtitle}
        </p>
      </div>
    </div>
  );
}
