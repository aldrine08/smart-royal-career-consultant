import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--srcc-purple-deep)] text-white">
      <div className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-[var(--srcc-purple)]/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-8rem] left-[25%] h-72 w-72 rounded-full bg-[var(--srcc-gold)]/10 blur-3xl" />

      <div className="srcc-container relative py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
            <span className="h-0.5 w-7 bg-[var(--srcc-gold)]" />
            {eyebrow}
          </span>

          <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.94] tracking-[-0.055em]">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100/65">
            {description}
          </p>

          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}