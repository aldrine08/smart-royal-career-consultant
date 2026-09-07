import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "gold";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--srcc-purple)] text-white hover:bg-[var(--srcc-purple-dark)] shadow-lg shadow-purple-900/15",
  secondary:
    "border border-zinc-300 bg-white text-zinc-900 hover:border-[var(--srcc-purple)] hover:text-[var(--srcc-purple)]",
  gold:
    "bg-[var(--srcc-gold)] text-zinc-950 hover:bg-[var(--srcc-gold-light)]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `
    srcc-focus-ring
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-6
    py-3.5
    text-sm
    font-bold
    transition-all
    duration-300
    hover:-translate-y-0.5
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}