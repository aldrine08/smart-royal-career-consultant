"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-[var(--srcc-black)] text-white md:block">
        <div className="srcc-container flex h-9 items-center justify-between text-xs">
          <p className="text-zinc-400">
            Professional Career & Corporate Development Solutions
          </p>

          <div className="flex items-center gap-6">
            <a
              href="tel:+254716226427"
              className="transition-colors hover:text-[var(--srcc-gold)]"
            >
              +254 716 226 427
            </a>

            <a
              href="mailto:info@smartroyalcareer.co.ke"
              className="transition-colors hover:text-[var(--srcc-gold)]"
            >
              info@smartroyalcareer.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl">
        <div className="srcc-container">
          <div className="flex h-20 items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="srcc-focus-ring flex items-center gap-3 rounded-md"
              aria-label="Smart Royal Career Consultant home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--srcc-purple)] text-sm font-black text-white shadow-lg shadow-purple-900/20">
                SR
              </span>

              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight text-zinc-950">
                  SMART ROYAL
                </div>

                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Career Consultant
                </div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Primary navigation"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);

                if (item.children) {
                  return (
                    <div
                      key={item.href}
                      className="group relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesOpen((current) => !current)}
                        aria-expanded={servicesOpen}
                        className={`srcc-focus-ring flex items-center gap-2 rounded-md py-3 text-sm font-semibold transition-colors ${
                          active
                            ? "text-[var(--srcc-purple)]"
                            : "text-zinc-700 hover:text-[var(--srcc-purple)]"
                        }`}
                      >
                        {item.label}

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      <div
                        className={`absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-4 transition-all duration-300 ${
                          servicesOpen
                            ? "pointer-events-auto visible translate-y-0 opacity-100"
                            : "pointer-events-none invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-2xl shadow-zinc-950/10">
                          <div className="border-b border-zinc-100 px-4 py-4">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--srcc-purple)]">
                              Our Services
                            </p>

                            <p className="mt-1 text-sm text-zinc-500">
                              Professional solutions for careers,
                              organisations and people.
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-1 p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setServicesOpen(false)}
                                className="group/item rounded-xl p-4 transition-colors hover:bg-[var(--srcc-purple-soft)]"
                              >
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--srcc-gold)]" />

                                  <div>
                                    <div className="text-sm font-bold text-zinc-900 transition-colors group-hover/item:text-[var(--srcc-purple)]">
                                      {child.label}
                                    </div>

                                    <div className="mt-1 text-xs leading-5 text-zinc-500">
                                      {child.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="border-t border-zinc-100 px-3 pt-3">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="srcc-link-underline inline-flex px-3 py-2 text-sm font-bold text-[var(--srcc-purple)]"
                            >
                              View all services
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`srcc-focus-ring relative rounded-md py-3 text-sm font-semibold transition-colors ${
                      active
                        ? "text-[var(--srcc-purple)]"
                        : "text-zinc-700 hover:text-[var(--srcc-purple)]"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[var(--srcc-gold)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="srcc-focus-ring hidden items-center justify-center rounded-full bg-[var(--srcc-purple)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-purple-dark)] lg:inline-flex"
            >
              Get Started
            </Link>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              className="srcc-focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 lg:hidden"
            >
              {mobileOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 6 18 18M6 18 18 6" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-b border-zinc-200 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="srcc-container py-4">
          <nav aria-label="Mobile navigation" className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen((current) => !current)
                      }
                      aria-expanded={servicesOpen}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold ${
                        active
                          ? "bg-[var(--srcc-purple-soft)] text-[var(--srcc-purple)]"
                          : "text-zinc-800"
                      }`}
                    >
                      <span>{item.label}</span>

                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen
                          ? "max-h-[700px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 border-l border-zinc-200 py-2 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setServicesOpen(false);
                            }}
                            className="block rounded-lg px-3 py-2.5 text-sm text-zinc-600 transition-colors hover:bg-[var(--srcc-purple-soft)] hover:text-[var(--srcc-purple)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                    active
                      ? "bg-[var(--srcc-purple-soft)] text-[var(--srcc-purple)]"
                      : "text-zinc-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="border-t border-zinc-200 pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-full bg-[var(--srcc-purple)] px-5 py-3.5 text-sm font-bold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}