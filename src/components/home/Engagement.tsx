"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { engagementPaths } from "@/data/engagement";

gsap.registerPlugin(ScrollTrigger);

export default function Engagement() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".engagement-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".engagement-heading",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".engagement-path", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".engagement-paths",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".engagement-cta", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".engagement-cta",
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
      className="overflow-hidden bg-white"
      aria-labelledby="engagement-heading"
    >
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="engagement-heading max-w-4xl">
          <span className="srcc-eyebrow">How Can SRCC Help?</span>

          <h2
            id="engagement-heading"
            className="srcc-heading-lg mt-6 max-w-4xl text-zinc-950"
          >
            The right conversation starts with the right direction.
          </h2>

          <p className="srcc-body-lg mt-7 max-w-3xl">
            Whether you are planning your next career move or looking for
            professional support for your organization, choose the pathway
            that best describes your needs.
          </p>
        </div>

        {/* Audience paths */}
        <div className="engagement-paths mt-14 grid gap-5 lg:grid-cols-2">
          {engagementPaths.map((path) => (
            <Link
              key={path.id}
              href={path.href}
              className="engagement-path group srcc-focus-ring relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[var(--srcc-purple)] hover:bg-white hover:shadow-[var(--srcc-shadow-lg)] sm:p-10"
            >
              <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-[var(--srcc-purple)]/5 blur-3xl transition-all duration-500 group-hover:bg-[var(--srcc-purple)]/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--srcc-purple)]">
                    {path.eyebrow}
                  </span>

                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-all duration-300 group-hover:bg-[var(--srcc-purple)] group-hover:text-white"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-10 max-w-xl text-[clamp(2rem,3.5vw,3.25rem)] font-black leading-[1] tracking-[-0.04em] text-zinc-950 transition-colors duration-300 group-hover:text-[var(--srcc-purple)]">
                  {path.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600">
                  {path.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {path.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--srcc-purple)]" />

                      <span className="text-sm text-zinc-600">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition-all duration-300 group-hover:bg-[var(--srcc-purple)]">
                  {path.cta}

                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Direct contact CTA */}
        <div className="engagement-cta relative mt-8 overflow-hidden rounded-[2rem] bg-[var(--srcc-black)] p-8 text-white sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute right-[-5rem] top-[-6rem] h-72 w-72 rounded-full bg-[var(--srcc-purple)]/25 blur-3xl" />

          <div className="pointer-events-none absolute bottom-[-5rem] left-[30%] h-48 w-48 rounded-full bg-[var(--srcc-gold)]/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
                Start a Conversation
              </span>

              <h3 className="mt-5 text-[clamp(2rem,4vw,3.75rem)] font-black leading-[1] tracking-[-0.04em]">
                Let's discuss your next step.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                Tell us what you need and the SRCC team can review your enquiry.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact"
                className="srcc-focus-ring inline-flex items-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
              >
                Contact SRCC
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <a
                href="tel:+254716226427"
                className="srcc-focus-ring inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/40"
              >
                Call SRCC
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}