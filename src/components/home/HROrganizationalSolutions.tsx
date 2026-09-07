"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  employmentLifecycle,
  organizationalSolutions,
} from "@/data/organizational";

gsap.registerPlugin(ScrollTrigger);

export default function HROrganizationalSolutions() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeId, setActiveId] = useState(
    organizationalSolutions[0].id,
  );

  const activeSolution =
    organizationalSolutions.find(
      (solution) => solution.id === activeId,
    ) ?? organizationalSolutions[0];

  useGSAP(
    () => {
      gsap.from(".org-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".org-heading",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".org-interface", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".org-interface",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".lifecycle-item", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lifecycle",
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
      className="overflow-hidden bg-zinc-100"
      aria-labelledby="organizational-solutions-heading"
    >
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="org-heading max-w-4xl">
          <span className="srcc-eyebrow">
            HR &amp; Organizational Solutions
          </span>

          <h2
            id="organizational-solutions-heading"
            className="srcc-heading-lg mt-6 max-w-4xl text-zinc-950"
          >
            Building stronger people systems for organizations.
          </h2>

          <p className="srcc-body-lg mt-7 max-w-3xl">
            From recruitment and HR consulting to performance management,
            payroll, outsourcing and organizational support, SRCC provides
            solutions across key stages of the employment lifecycle.
          </p>
        </div>

        {/* Interactive interface */}
        <div className="org-interface mt-16 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[var(--srcc-shadow-lg)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* Left selector */}
            <div className="border-b border-zinc-200 bg-zinc-50 lg:border-b-0 lg:border-r">
              <div className="border-b border-zinc-200 px-6 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Organizational capabilities
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Select an area to explore the support SRCC describes.
                </p>
              </div>

              <div className="p-3">
                {organizationalSolutions.map((solution) => {
                  const active = solution.id === activeId;

                  return (
                    <button
                      key={solution.id}
                      type="button"
                      onClick={() => setActiveId(solution.id)}
                      aria-pressed={active}
                      className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                        active
                          ? "bg-[var(--srcc-purple)] text-white shadow-lg shadow-purple-900/15"
                          : "text-zinc-600 hover:bg-white hover:text-zinc-950"
                      }`}
                    >
                      <span
                        className={`text-xs font-black tracking-[0.15em] ${
                          active
                            ? "text-[var(--srcc-gold)]"
                            : "text-zinc-400"
                        }`}
                      >
                        {solution.number}
                      </span>

                      <span className="flex-1 text-sm font-bold sm:text-base">
                        {solution.title}
                      </span>

                      <span
                        className={`transition-all duration-300 ${
                          active
                            ? "translate-x-0 opacity-100"
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

              <div className="border-t border-zinc-200 p-6">
                <Link
                  href="/services"
                  className="srcc-link-underline text-sm font-bold text-[var(--srcc-purple)]"
                >
                  Explore the full service portfolio
                </Link>
              </div>
            </div>

            {/* Active solution */}
            <div className="relative min-h-[590px] overflow-hidden bg-[var(--srcc-purple-deep)] p-8 text-white sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-80 w-80 rounded-full bg-[var(--srcc-purple)]/35 blur-3xl" />

              <div className="pointer-events-none absolute bottom-[-8rem] left-[-5rem] h-80 w-80 rounded-full bg-[var(--srcc-gold)]/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-100/60">
                        {activeSolution.category}
                      </span>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--srcc-gold)]">
                        Organizational Solution
                      </p>
                    </div>

                    <span className="text-8xl font-black leading-none tracking-[-0.08em] text-white/5">
                      {activeSolution.number}
                    </span>
                  </div>

                  <h3
                    key={activeSolution.id}
                    className="mt-14 max-w-2xl text-[clamp(2.2rem,4vw,4rem)] font-black leading-[1] tracking-[-0.045em]"
                  >
                    {activeSolution.title}
                  </h3>

                  <div className="mt-7 h-1 w-16 rounded-full bg-[var(--srcc-gold)]" />

                  <p
                    key={`${activeSolution.id}-description`}
                    className="mt-7 max-w-2xl text-lg leading-8 text-purple-50/80"
                  >
                    {activeSolution.description}
                  </p>

                  <div className="mt-9 grid gap-3 sm:grid-cols-2">
                    {activeSolution.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--srcc-gold)]" />

                        <span className="text-sm leading-6 text-white/75">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href={`/services/${activeSolution.id}`}
                    className="inline-flex items-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
                  >
                    Explore this solution

                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employment lifecycle */}
        <div className="lifecycle mt-12 rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[var(--srcc-shadow-sm)] sm:p-9 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-purple)]">
                Employment lifecycle
              </span>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-950 md:text-3xl">
                Support across the employment journey.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              The company profile describes SRCC solutions as covering the
              complete life cycle of employment.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <div className="grid min-w-[760px] grid-cols-5">
              {employmentLifecycle.map((item, index) => (
                <div
                  key={item.number}
                  className="lifecycle-item relative px-3 first:pl-0 last:pr-0"
                >
                  {index < employmentLifecycle.length - 1 && (
                    <span className="absolute left-12 right-0 top-5 h-px bg-zinc-200" />
                  )}

                  <div className="relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--srcc-purple)] text-xs font-black text-white shadow-lg shadow-purple-900/10">
                      {item.number}
                    </div>

                    <p className="mt-4 text-sm font-bold text-zinc-900">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}