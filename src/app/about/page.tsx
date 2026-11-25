import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About SRCC",
  description:
    "Learn about Smart Royal Career Consultant, its philosophy, vision, mission, goal and approach to career and corporate development.",
};

const identity = [
  {
    number: "01",
    title: "Our Philosophy",
    text:
      "To deliver positive and often life-changing outcomes by facilitating the steps required for career progression, whether upward, sideways or through greater proficiency in an existing position.",
  },
  {
    number: "02",
    title: "Our Vision",
    text:
      "To provide practical human resources solutions, creating an empowering work environment for enhanced productivity and increased stakeholder value.",
  },
  {
    number: "03",
    title: "Our Mission",
    text:
      "We are a professional, enthusiastic and innovative team dedicated to providing professional HR consulting services and evolving recruitment solutions that help customers become more productive and profitable.",
  },
  {
    number: "04",
    title: "Our Goal",
    text:
      "To help individuals make informed decisions and take strategic steps toward their career goals.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About SRCC"
        title="Professional direction for careers and organizations."
        description="Smart Royal Career Consultant provides career and corporate development solutions built around people, professional service and organizational needs."
      />

      <section className="bg-white">
        <div className="srcc-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="srcc-eyebrow">Our Story</span>

              <h2 className="srcc-heading-lg mt-5">
                Established in 2013.
              </h2>
            </div>

            <div>
              <p className="srcc-body-lg">
                Smart Royal Career Consultant was established in 2013 as a
                global career and corporate development company providing
                direction for individual and corporate career progression.
              </p>

              <p className="srcc-body mt-6">
                The company's profile describes a commitment to high-end human
                resource consulting services and exemplary customer service,
                alongside innovative solutions for the non-profit, public and
                private sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="srcc-container py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="srcc-eyebrow">
              Corporate Identity
            </span>

            <h2 className="srcc-heading-lg mt-5">
              The principles that shape the SRCC approach.
            </h2>

            <p className="srcc-body-lg mt-6">
              Philosophy, vision, mission and goal provide the foundation for
              the way SRCC describes its career and organizational work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {identity.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-[var(--srcc-shadow-sm)] md:p-8"
              >
                <span className="text-xs font-black tracking-[0.16em] text-[var(--srcc-purple)]">
                  {item.number}
                </span>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="srcc-container py-20 md:py-28">
          <div className="rounded-[2rem] bg-[var(--srcc-black)] p-8 text-white sm:p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
              Continue Exploring
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              Discover how SRCC translates its philosophy into practical
              services.
            </h2>

            <Link
              href="/services"
              className="srcc-focus-ring mt-8 inline-flex items-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
            >
              Explore Our Services
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}