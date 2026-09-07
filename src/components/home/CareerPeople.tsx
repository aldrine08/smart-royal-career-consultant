"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { careerStages } from "@/data/career";

gsap.registerPlugin(ScrollTrigger);

export default function CareerPeople() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeStageId, setActiveStageId] = useState(
    careerStages[0].id,
  );

  const activeStage =
    careerStages.find((stage) => stage.id === activeStageId) ??
    careerStages[0];

  useGSAP(
    () => {
      gsap.from(".career-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".career-heading",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".career-journey", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".career-journey",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".career-stat", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".career-stats",
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

  const handleStageChange = (stageId: string) => {
    setActiveStageId(stageId);
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--srcc-purple-deep)] text-white"
      aria-labelledby="career-people-heading"
    >
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="career-heading max-w-4xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold-light)]">
            <span className="h-0.5 w-7 bg-[var(--srcc-gold)]" />
            Career Development
          </span>

          <h2
            id="career-people-heading"
            className="mt-6 max-w-4xl text-[clamp(2.8rem,5.5vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.05em]"
          >
            Your next step starts with clarity.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100/65">
            SRCC supports individuals in making informed career decisions,
            developing professional confidence and taking strategic steps
            toward their goals.
          </p>
        </div>

        {/* Journey */}
        <div className="career-journey mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_40px_100px_rgba(0,0,0,0.25)]">
          {/* Stage navigation */}
          <div className="overflow-x-auto border-b border-white/10">
            <div className="grid min-w-[760px] grid-cols-5">
              {careerStages.map((stage, index) => {
                const active = stage.id === activeStageId;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleStageChange(stage.id)}
                    className={`relative p-6 text-left transition-all duration-300 ${
                      active
                        ? "bg-white/[0.06]"
                        : "hover:bg-white/[0.025]"
                    }`}
                    aria-pressed={active}
                  >
                    {/* Connector */}
                    {index < careerStages.length - 1 && (
                      <span className="absolute right-0 top-[4.45rem] hidden h-px w-full bg-white/10 md:block" />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-black tracking-[0.15em] ${
                            active
                              ? "text-[var(--srcc-gold)]"
                              : "text-white/30"
                          }`}
                        >
                          {stage.number}
                        </span>

                        <span
                          className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                            active
                              ? "border-[var(--srcc-gold)] bg-[var(--srcc-gold)] shadow-lg shadow-yellow-500/25"
                              : "border-white/20 bg-transparent"
                          }`}
                        />
                      </div>

                      <p
                        className={`mt-7 text-sm font-bold ${
                          active
                            ? "text-white"
                            : "text-white/45"
                        }`}
                      >
                        {stage.shortTitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active content */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Visual */}
            <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
              <div className="absolute h-64 w-64 rounded-full bg-[var(--srcc-gold)]/10 blur-3xl" />

              <div className="absolute h-80 w-80 rounded-full border border-white/5" />

              <div className="absolute h-60 w-60 rounded-full border border-dashed border-[var(--srcc-gold)]/20" />

              <div className="relative z-10 text-center">
                <p className="text-8xl font-black tracking-[-0.08em] text-white/10 sm:text-9xl">
                  {activeStage.number}
                </p>

                <p className="mt-[-1.5rem] text-xs font-bold uppercase tracking-[0.22em] text-[var(--srcc-gold)]">
                  Career Journey
                </p>

                <h3 className="mt-4 max-w-xs text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {activeStage.shortTitle}
                </h3>
              </div>
            </div>

            {/* Information */}
            <div className="p-8 sm:p-10 lg:p-14">
              <div
                key={activeStage.id}
                className="animate-[fadeIn_.4s_ease-out]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
                  Stage {activeStage.number}
                </span>

                <h3 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1] tracking-[-0.04em] text-white">
                  {activeStage.title}
                </h3>

                <div className="mt-6 h-1 w-16 rounded-full bg-[var(--srcc-gold)]" />

                <p className="mt-7 max-w-xl text-lg leading-8 text-purple-100/65">
                  {activeStage.description}
                </p>

                <div className="mt-9 space-y-4">
                  {activeStage.support.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--srcc-gold)]" />

                      <span className="text-sm leading-7 text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services/career-coaching"
                  className="srcc-focus-ring mt-10 inline-flex items-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
                >
                  Explore Career Coaching

                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting stats */}
        <div className="career-stats mt-8 grid gap-4 sm:grid-cols-3">
          <div className="career-stat rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              Focus
            </p>

            <p className="mt-3 text-xl font-black text-white">
              Career Direction
            </p>
          </div>

          <div className="career-stat rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              Development
            </p>

            <p className="mt-3 text-xl font-black text-white">
              Skills & Confidence
            </p>
          </div>

          <div className="career-stat rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              Direction
            </p>

            <p className="mt-3 text-xl font-black text-white">
              Strategic Progression
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}