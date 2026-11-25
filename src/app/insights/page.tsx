import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Career, HR and organizational insights from Smart Royal Career Consultant.",
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Ideas for careers, people and organizations."
        description="A future SRCC insights platform for career guidance, HR perspectives, organizational development and company updates."
      />

      <section className="bg-zinc-50">
        <div className="srcc-container py-20 md:py-28">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 text-center shadow-[var(--srcc-shadow-sm)] sm:p-12">
            <span className="srcc-eyebrow justify-center">
              Coming Soon
            </span>

            <h2 className="srcc-heading-md mt-5">
              SRCC insights will live here.
            </h2>

            <p className="srcc-body mt-5 mx-auto max-w-2xl">
              Once approved articles, career guidance, HR insights and company
              updates are available, this section can become a full editorial
              platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}