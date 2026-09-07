"use client";

import Link from "next/link";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why SRCC", href: "/why-srcc" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl">
      <div className="srcc-container">
        <div className="flex h-20 items-center justify-between gap-8">
          <Link
            href="/"
            className="srcc-focus-ring flex items-center gap-3 rounded-md"
            aria-label="Smart Royal Career Consultant home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--srcc-purple)] text-sm font-black text-white shadow-lg shadow-purple-900/20">
              SR
            </span>

            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-extrabold tracking-tight text-zinc-950">
                SMART ROYAL
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Career Consultant
              </div>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="srcc-focus-ring rounded-md text-sm font-semibold text-zinc-700 transition-colors duration-200 hover:text-[var(--srcc-purple)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="srcc-focus-ring inline-flex items-center justify-center rounded-full bg-[var(--srcc-purple)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--srcc-purple-dark)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}