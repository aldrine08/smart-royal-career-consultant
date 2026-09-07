"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { trustMetrics, operatingPrinciples } from "@/data/trust";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTrust() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".trust-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-heading",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".trust-metric", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-metrics",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".principle-card", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".principles-grid",
          start: "top 85%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
      dependencies: [],
    },
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-zinc-950 text-white"
      aria-labelledby="experience-trust-heading"
    >
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="trust-heading max-w-4xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold-light)]">
            <span className="h-0.5 w-7 bg-[var(--srcc-gold)]" />
            Experience &amp; People
          </span>

          <h2
            id="experience-trust-heading"
            className="mt-6 max-w-4xl text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.05em]"
          >
            Built around professional expertise, relationships and continuous
            improvement.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            SRCC's documented approach brings together people, professional
            service, strategic relationships, technology and ongoing support.
          </p>
        </div>

        {/* Metrics */}
        <div className="trust-metrics mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustMetrics.map((metric) => (
            <article
              key={metric.label}
              className="trust-metric group relative min-h-[240px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--srcc-purple)]/20 blur-3xl transition-all duration-500 group-hover:bg-[var(--srcc-purple)]/35" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    SRCC
                  </span>

                  <p
                    className={`mt-8 font-black tracking-[-0.05em] ${
                      metric.type === "number"
                        ? "text-5xl sm:text-6xl"
                        : "text-4xl sm:text-5xl"
                    }`}
                  >
                    {metric.value}
                  </p>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.13em] text-[var(--srcc-gold)]">
                    {metric.label}
                  </p>
                </div>

                <p className="mt-7 text-sm leading-6 text-zinc-500">
                  {metric.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Principles */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
                How we work
              </span>

              <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Professional relationships that continue to evolve.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                SRCC's profile places emphasis on relationships, service,
                technology, support and continuous development.
              </p>

              <Link
                href="/about"
                className="srcc-focus-ring srcc-link-underline mt-7 inline-flex rounded-sm text-sm font-bold text-white"
              >
                Learn more about SRCC
                <span className="ml-2 text-[var(--srcc-gold)]" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="principles-grid grid gap-4 sm:grid-cols-3">
              {operatingPrinciples.map((principle, index) => (
                <article
                  key={principle.title}
                  className="principle-card rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <span className="text-xs font-black tracking-[0.16em] text-[var(--srcc-gold)]">
                    0{index + 1}
                  </span>

                  <h4 className="mt-8 text-xl font-black text-white">
                    {principle.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {principle.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-white/10" />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 rounded-[2rem] border border-[var(--srcc-gold)]/20 bg-[var(--srcc-gold)]/[0.035] p-7 sm:p-9 md:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
                SRCC perspective
              </p>

              <p className="mt-4 text-xl font-bold leading-8 text-white sm:text-2xl">
                Supporting clients through professional service, practical
                solutions and an ongoing focus on improvement.
              </p>
            </div>

            <Link
              href="/contact"
              className="srcc-focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
            >
              Talk to SRCC
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}