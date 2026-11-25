import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and professional engagement with Smart Royal Career Consultant.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Grow with a professional team."
        description="SRCC's company profile describes an equal-opportunity and transparent approach to hiring and professional development."
      />

      <section className="bg-white">
        <div className="srcc-container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="srcc-eyebrow justify-center">
              Opportunities
            </span>

            <h2 className="srcc-heading-lg mt-5">
              Career opportunities at SRCC.
            </h2>

            <p className="srcc-body-lg mt-6">
              Current vacancies have not been included in the supplied company
              profile. We will add verified openings here once SRCC provides
              them.
            </p>

            <Link
              href="/contact"
              className="srcc-focus-ring mt-8 inline-flex items-center rounded-full bg-[var(--srcc-purple)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-purple-dark)]"
            >
              Contact SRCC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}