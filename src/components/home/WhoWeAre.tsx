"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const identityCards = [
  {
    number: "01",
    title: "Our Philosophy",
    shortDescription:
      "Positive outcomes and meaningful career progression.",
    description:
      "SRCC is focused on delivering positive outcomes that help individuals progress in their careers, whether moving into new roles, progressing upward, changing direction or becoming more proficient in their existing positions.",
  },
  {
    number: "02",
    title: "Our Vision",
    shortDescription:
      "Practical HR solutions that empower organizations.",
    description:
      "To provide practical human resources solutions that create an empowering work environment for enhanced productivity and increased stakeholder value.",
  },
  {
    number: "03",
    title: "Our Mission",
    shortDescription:
      "Professional HR consulting and evolving recruitment solutions.",
    description:
      "To provide professional HR consulting services and evolving recruitment solutions that help customers become more productive and profitable.",
  },
  {
    number: "04",
    title: "Our Goal",
    shortDescription:
      "Helping people make informed career decisions.",
    description:
      "To help individuals make informed decisions and take strategic steps toward achieving their career goals.",
  },
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
  () => {
    gsap.from(".who-intro", {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".who-intro",
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(".who-visual", {
      y: 60,
      opacity: 0,
      scale: 0.96,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".who-visual",
        start: "top 80%",
        once: true,
      },
    });

    // REPLACE THE OLD identity-card ANIMATION WITH THIS
    gsap.fromTo(
      ".identity-card",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: ".identity-grid",
          start: "top 85%",
          once: true,
        },
      },
    );
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
      aria-labelledby="who-we-are-heading"
    >
      {/* Main introduction */}
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          {/* Copy */}
          <div className="who-intro">
            <span className="srcc-eyebrow">Who We Are</span>

            <h2
              id="who-we-are-heading"
              className="srcc-heading-lg mt-6 max-w-2xl text-zinc-950"
            >
              A professional partner for career and corporate development.
            </h2>

            <p className="srcc-body-lg mt-7 max-w-2xl">
              Established in 2013, Smart Royal Career Consultant provides
              direction for individual and corporate career progression through
              professional human resource consulting and career development
              solutions.
            </p>

            <p className="srcc-body mt-5 max-w-2xl">
              SRCC's approach is built around innovative solutions, quality
              professional services, customer focus and a deep understanding of
              the sector it serves.
            </p>

            <Link
              href="/about"
              className="srcc-focus-ring srcc-link-underline mt-8 inline-flex rounded-sm text-sm font-bold text-[var(--srcc-purple)]"
            >
              Discover the SRCC story
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* Visual panel */}
          <div className="who-visual relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-[var(--srcc-purple)]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--srcc-black)] p-8 shadow-[var(--srcc-shadow-lg)] sm:p-10 lg:p-12">
              <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-[var(--srcc-purple)]/30 blur-3xl" />

              <div className="absolute bottom-[-5rem] left-[-3rem] h-40 w-40 rounded-full bg-[var(--srcc-gold)]/15 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--srcc-gold)]">
                      Company Since
                    </p>

                    <p className="mt-4 text-7xl font-black tracking-[-0.06em] text-white sm:text-8xl">
                      2013
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--srcc-purple)] text-sm font-black text-white">
                    SR
                  </span>
                </div>

                <div className="mt-14 border-t border-white/10 pt-7">
                  <p className="max-w-sm text-xl font-bold leading-8 text-white">
                    Career progression and corporate development through
                    professional solutions.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      Individual Career
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      Corporate Development
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--srcc-gold)]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    Professional • Innovative • Customer-focused
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy / Vision / Mission / Goal */}
      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="srcc-container py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="srcc-eyebrow">Our Corporate Identity</span>

            <h3 className="srcc-heading-lg mt-6 text-zinc-950">
              What guides the way we work.
            </h3>

            <p className="srcc-body-lg mt-6">
              SRCC's philosophy, vision, mission and goal provide the foundation
              for how the company approaches career progression, human resource
              solutions and customer service.
            </p>
          </div>

          <div className="identity-grid mt-14 grid gap-5 md:grid-cols-2">
  {identityCards.map((card) => (
    <article
      key={card.number}
      className="
        identity-card
        group
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-zinc-200
        bg-white
        p-7
        shadow-[var(--srcc-shadow-sm)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--srcc-purple)]
        hover:shadow-[var(--srcc-shadow-lg)]
        focus-within:-translate-y-2
        focus-within:border-[var(--srcc-purple)]
        md:p-8
      "
    >
      {/* Gold accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-[var(--srcc-gold)]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[var(--srcc-purple)]/5
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span
            className="
              text-xs
              font-black
              tracking-[0.16em]
              text-[var(--srcc-purple)]
            "
          >
            {card.number}
          </span>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-zinc-100
              text-sm
              text-zinc-400
              transition-all
              duration-500
              group-hover:bg-[var(--srcc-purple)]
              group-hover:text-white
            "
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        {/* Title */}
        <h4
          className="
            mt-8
            text-2xl
            font-black
            tracking-tight
            text-zinc-950
            transition-colors
            duration-300
            group-hover:text-[var(--srcc-purple)]
          "
        >
          {card.title}
        </h4>

        {/* Short description */}
        <p
          className="
            mt-4
            text-base
            font-semibold
            leading-7
            text-zinc-700
          "
        >
          {card.shortDescription}
        </p>

        {/* Full description */}
        <p
          className="
            mt-4
            max-h-0
            overflow-hidden
            text-sm
            leading-7
            text-zinc-600
            opacity-0
            transition-all
            duration-500
            group-hover:max-h-40
            group-hover:opacity-100
            md:max-h-none
            md:opacity-100
          "
        >
          {card.description}
        </p>

        {/* Bottom action */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-zinc-100
            pt-5
          "
        >
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-zinc-400
              transition-colors
              duration-300
              group-hover:text-[var(--srcc-purple)]
            "
          >
            Explore
          </span>

          <span
            className="
              text-lg
              text-zinc-300
              transition-all
              duration-500
              group-hover:translate-x-1
              group-hover:text-[var(--srcc-gold-dark)]
            "
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </article>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}