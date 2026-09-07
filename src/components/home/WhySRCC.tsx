"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { strategicStrengths } from "@/data/strengths";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WhySRCC() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeId, setActiveId] = useState(
    strategicStrengths[0].id,
  );

  const activeStrength =
    strategicStrengths.find((item) => item.id === activeId) ??
    strategicStrengths[0];

  useGSAP(
    () => {
      gsap.from(".why-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-heading",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".why-feature", {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-feature",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".strength-item", {
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".strength-grid",
          start: "top 82%",
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
      aria-labelledby="why-srcc-heading"
    >
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        {/* Introduction */}
        <div className="why-heading max-w-4xl">
          <span className="srcc-eyebrow">Why SRCC</span>

          <h2
            id="why-srcc-heading"
            className="srcc-heading-lg mt-6 max-w-4xl"
          >
            Experience built around people, performance and practical
            solutions.
          </h2>

          <p className="srcc-body-lg mt-7 max-w-3xl">
            SRCC's approach combines professional service, customer focus,
            sector understanding, strategic relationships, technology and
            ongoing support.
          </p>
        </div>

        {/* Feature composition */}
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Strength selector */}
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50">
            <div className="border-b border-zinc-200 px-6 py-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Strategic strengths
              </p>
            </div>

            <div className="p-3">
              {strategicStrengths.map((strength) => {
                const active = strength.id === activeId;

                return (
                  <button
                    key={strength.id}
                    type="button"
                    onClick={() => setActiveId(strength.id)}
                    aria-pressed={active}
                    className={`strength-item group flex w-full items-center gap-4 rounded-2xl px-4 py-5 text-left transition-all duration-300 ${
                      active
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/70"
                    }`}
                  >
                    <span
                      className={`text-xs font-black tracking-[0.15em] ${
                        active
                          ? "text-[var(--srcc-purple)]"
                          : "text-zinc-400"
                      }`}
                    >
                      {strength.number}
                    </span>

                    <span
                      className={`flex-1 text-sm font-bold ${
                        active
                          ? "text-zinc-950"
                          : "text-zinc-600 group-hover:text-zinc-950"
                      }`}
                    >
                      {strength.title}
                    </span>

                    <span
                      className={`text-lg transition-all duration-300 ${
                        active
                          ? "translate-x-0 text-[var(--srcc-purple)] opacity-100"
                          : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active feature */}
          <div className="why-feature relative overflow-hidden rounded-[2rem] bg-[var(--srcc-purple-deep)] p-8 text-white shadow-[var(--srcc-shadow-lg)] sm:p-10 lg:p-14">
            <div className="absolute right-[-6rem] top-[-7rem] h-72 w-72 rounded-full bg-[var(--srcc-purple)]/35 blur-3xl" />

            <div className="absolute bottom-[-6rem] left-[-5rem] h-64 w-64 rounded-full bg-[var(--srcc-gold)]/10 blur-3xl" />

            <div className="relative flex min-h-[470px] flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-100/70">
                    Why SRCC
                  </span>

                  <span className="text-8xl font-black leading-none tracking-[-0.08em] text-white/5">
                    {activeStrength.number}
                  </span>
                </div>

                <h3
                  key={activeStrength.id}
                  className="mt-16 max-w-2xl text-[clamp(2.25rem,4vw,4.25rem)] font-black leading-[0.98] tracking-[-0.045em]"
                >
                  {activeStrength.title}
                </h3>

                <div className="mt-7 h-1 w-16 rounded-full bg-[var(--srcc-gold)]" />

                <p
                  key={`${activeStrength.id}-statement`}
                  className="mt-7 max-w-xl text-xl leading-8 text-white"
                >
                  {activeStrength.statement}
                </p>

                <p
                  key={`${activeStrength.id}-description`}
                  className="mt-5 max-w-xl text-sm leading-7 text-purple-100/60"
                >
                  {activeStrength.description}
                </p>
              </div>

              <div className="mt-12 flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--srcc-gold)]">
                    Client focus
                  </p>

                  <p className="mt-2 text-sm text-purple-100/60">
                    Professional. Practical. Relationship-driven.
                  </p>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:flex">
                  <span className="text-xl font-black text-[var(--srcc-gold)]">
                    SR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-6 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-zinc-950">
              Looking for a practical professional partner?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Explore SRCC's services or begin a conversation around your
              career or organizational needs.
            </p>
          </div>

          <Link
            href="/contact"
            className="srcc-focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--srcc-purple)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-purple-dark)]"
          >
            Start a Conversation
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}