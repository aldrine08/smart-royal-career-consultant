"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-eyebrow", {
        y: 24,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-title-line",
          {
            y: 70,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".hero-visual",
          {
            scale: 0.94,
            opacity: 0,
            duration: 1,
          },
          "-=0.65",
        )
        .from(
          ".hero-float",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.55",
        );

      gsap.to(".hero-orbit-one", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-orbit-two", {
        rotate: -360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-pulse", {
        scale: 1.08,
        opacity: 0.65,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: heroRef,
      dependencies: [],
    },
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(91, 33, 182, 0.08)" }}
      />

      <div
        className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "rgba(234, 179, 8, 0.12)" }}
      />

      <div className="srcc-container relative">
        <div className="grid min-h-[calc(100vh-7.25rem)] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          {/* Copy */}
          <div className="max-w-3xl">
            <div className="hero-eyebrow">
              <span className="srcc-eyebrow">
                Smart Royal Career Consultant
              </span>
            </div>

            <h1 className="mt-7 overflow-hidden text-[clamp(3.2rem,7vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-zinc-950">
              <span className="hero-title-line block">
                Empowering
              </span>

              <span className="hero-title-line block text-[var(--srcc-purple)]">
                careers.
              </span>

              <span className="hero-title-line block">
                Strengthening
              </span>

              <span className="hero-title-line block text-[var(--srcc-purple)]">
                organizations.
              </span>
            </h1>

            <p className="hero-description srcc-body-lg mt-8 max-w-2xl">
              Professional career and corporate development solutions designed
              to help individuals make informed career decisions and help
              organizations strengthen people, performance and productivity.
            </p>

            <div className="hero-actions mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="srcc-focus-ring inline-flex items-center gap-3 rounded-full bg-[var(--srcc-purple)] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-purple-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--srcc-purple-dark)]"
              >
                Explore Our Services

                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="srcc-focus-ring inline-flex items-center justify-center rounded-full border border-zinc-300 px-7 py-4 text-sm font-bold text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--srcc-purple)] hover:text-[var(--srcc-purple)]"
              >
                Talk to SRCC
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-zinc-200 pt-7">
              <div>
                <p className="text-2xl font-black tracking-tight text-zinc-950">
                  2013
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Established
                </p>
              </div>

              <div className="hidden h-10 w-px bg-zinc-200 sm:block" />

              <div>
                <p className="text-2xl font-black tracking-tight text-zinc-950">
                  HR
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Consulting
                </p>
              </div>

              <div className="hidden h-10 w-px bg-zinc-200 sm:block" />

              <div>
                <p className="text-2xl font-black tracking-tight text-zinc-950">
                  Career
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Development
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual relative mx-auto flex min-h-[520px] w-full max-w-[620px] items-center justify-center">
            <div className="hero-pulse absolute h-72 w-72 rounded-full bg-[var(--srcc-purple)]/10 blur-3xl" />

            <div className="hero-orbit-one absolute h-[430px] w-[430px] rounded-full border border-[var(--srcc-purple)]/10">
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--srcc-gold)] shadow-lg shadow-yellow-500/30" />
            </div>

            <div className="hero-orbit-two absolute h-[330px] w-[330px] rounded-full border border-dashed border-[var(--srcc-gold)]/30">
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--srcc-purple)]" />
            </div>

            {/* Main brand panel */}
            <div className="relative z-10 w-[min(100%,430px)] overflow-hidden rounded-[2rem] bg-[var(--srcc-purple-deep)] p-8 shadow-[0_35px_90px_rgba(36,4,61,0.25)] sm:p-10">
              <div className="absolute right-[-50px] top-[-70px] h-52 w-52 rounded-full bg-[var(--srcc-gold)]/20 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-black text-[var(--srcc-purple)]">
                    SR
                  </span>

                  <span className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-100/70">
                    Since 2013
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--srcc-gold-light)]">
                    People • Performance • Progress
                  </p>

                  <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Your next move starts with clarity.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-purple-100/70">
                    Career progression and organizational development support
                    built around practical, professional solutions.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-purple-100/50">
                      Focus
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Careers
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-purple-100/50">
                      Focus
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Organizations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="hero-float absolute left-0 top-16 z-20 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-950/10 sm:left-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--srcc-gold)]/15 text-lg">
                  ↗
                </span>

                <div>
                  <p className="text-xs font-bold text-zinc-900">
                    Career Progression
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500">
                    Move forward with clarity
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-float absolute bottom-20 right-0 z-20 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-950/10 sm:right-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--srcc-purple)]/10 text-sm font-black text-[var(--srcc-purple)]">
                  HR
                </span>

                <div>
                  <p className="text-xs font-bold text-zinc-900">
                    HR Solutions
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500">
                    Practical expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom signal */}
      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="srcc-container">
          <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold text-zinc-600">
              Career development • HR consulting • Recruitment • Organizational
              support
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--srcc-gold)]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                Professional solutions. Client focused.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}