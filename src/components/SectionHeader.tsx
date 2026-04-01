import Link from "next/link";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  linkText?: string;
  linkHref?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  linkText,
  linkHref,
  center,
}: SectionHeaderProps) {
  if (center) {
    return (
      <div className="text-center mb-10 md:mb-16">
        {eyebrow && (
          <h2 className="text-xs uppercase tracking-[0.4em] text-primary mb-3 md:mb-4">
            {eyebrow}
          </h2>
        )}
        <h3 className="text-2xl sm:text-3xl font-headline italic text-on-surface">
          {title}
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-4 md:gap-6">
      <div>
        {eyebrow && (
          <h2 className="text-xs uppercase tracking-[0.4em] text-primary mb-2 md:mb-4">
            {eyebrow}
          </h2>
        )}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline italic text-on-surface">
          {title}
        </h3>
      </div>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-b border-on-surface-variant/20 pb-2"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
