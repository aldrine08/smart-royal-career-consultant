"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeServiceId, setActiveServiceId] = useState(
    services[0].id,
  );

  const activeService =
    services.find((service) => service.id === activeServiceId) ??
    services[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveServiceId((currentId) => {
        const currentIndex = services.findIndex(
          (service) => service.id === currentId,
        );

        const nextIndex =
          currentIndex === services.length - 1 ? 0 : currentIndex + 1;

        return services[nextIndex].id;
      });
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      gsap.from(".services-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".services-interface", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-interface",
          start: "top 80%",
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
      aria-labelledby="services-heading"
    >
      <div className="srcc-container py-24 md:py-32 lg:py-40">
        {/* Section introduction */}
        <div className="services-heading max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
            <span className="h-0.5 w-7 bg-[var(--srcc-gold)]" />
            Our Services
          </span>

          <h2
            id="services-heading"
            className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.045em]"
          >
            Professional solutions across careers, people and organizations.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            From career progression and recruitment to human resource
            consulting, outsourcing, performance and payroll solutions, SRCC
            provides a broad professional service offering.
          </p>
        </div>

        {/* Interactive service interface */}
        <div className="services-interface mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* Service list */}
            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              <div className="p-4 sm:p-6">
                {services.map((service) => {
                  const active = service.id === activeServiceId;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveServiceId(service.id)}
                      className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 sm:px-5 ${
                        active
                          ? "bg-white text-zinc-950"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                      aria-pressed={active}
                    >
                      <span
                        className={`text-xs font-black tracking-[0.16em] ${
                          active
                            ? "text-[var(--srcc-purple)]"
                            : "text-zinc-600 group-hover:text-[var(--srcc-gold)]"
                        }`}
                      >
                        {service.number}
                      </span>

                      <span className="flex-1 text-sm font-bold sm:text-base">
                        {service.shortTitle}
                      </span>

                      <span
                        className={`transition-transform duration-300 ${
                          active
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-white/10 p-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--srcc-gold-light)] transition-colors hover:text-white"
                >
                  View all services
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Active service */}
            <div className="relative min-h-[560px] overflow-hidden p-7 sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-72 w-72 rounded-full bg-[var(--srcc-purple)]/20 blur-3xl" />

              <div className="pointer-events-none absolute bottom-[-7rem] left-[-5rem] h-72 w-72 rounded-full bg-[var(--srcc-gold)]/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--srcc-gold)]">
                      {activeService.category}
                    </span>

                    <span className="text-6xl font-black tracking-[-0.06em] text-white/5">
                      {activeService.number}
                    </span>
                  </div>

                  <h3
                    key={activeService.id}
                    className="mt-16 max-w-2xl text-[clamp(2.2rem,4vw,4rem)] font-black leading-[1] tracking-[-0.04em] text-white"
                  >
                    {activeService.title}
                  </h3>

                  <div className="mt-7 h-1 w-16 rounded-full bg-[var(--srcc-gold)]" />

                  <p
                    key={`${activeService.id}-description`}
                    className="mt-7 max-w-xl text-lg leading-8 text-zinc-300"
                  >
                    {activeService.description}
                  </p>

                  <p
                    key={`${activeService.id}-detail`}
                    className="mt-5 max-w-xl text-sm leading-7 text-zinc-500"
                  >
                    {activeService.detail}
                  </p>
                </div>

                <div className="mt-12">
                  <Link
                    href={activeService.href}
                    className="inline-flex items-center gap-3 rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
                  >
                    Explore this service

                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-2xl font-black text-white">People</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Supporting career progression, development and professional
              capability.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-2xl font-black text-white">Performance</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Connecting people and organizational objectives through practical
              systems and processes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-2xl font-black text-white">Progress</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Helping individuals and organizations take strategic steps
              forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}