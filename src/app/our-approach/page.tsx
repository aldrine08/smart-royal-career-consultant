import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Explore SRCC's documented strategy, customer focus, strategic alliances, technology and service approach.",
};

const pillars = [
  {
    number: "01",
    title: "Strategic Alliances",
    description:
      "SRCC identifies relationships with clients and business partners as a key to success.",
  },
  {
    number: "02",
    title: "Customer Focus",
    description:
      "A market and customer-focused paradigm is part of the company's documented strategy.",
  },
  {
    number: "03",
    title: "Balanced Scorecard",
    description:
      "SRCC describes consistent use of balanced-scorecard fundamentals to manage goals and results.",
  },
  {
    number: "04",
    title: "Service Delivery",
    description:
      "The company emphasizes support and service delivery as a strategic strength.",
  },
  {
    number: "05",
    title: "Technology",
    description:
      "SRCC's profile highlights technological expertise and advancing technology in its planning and career solutions.",
  },
];

export default function OurApproachPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Approach"
        title="A client-focused approach to evolving career and HR needs."
        description="SRCC's documented strategy combines relationships, customer focus, balanced management, technology, training and service delivery."
      />

      <section className="bg-zinc-50">
        <div className="srcc-container py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-[var(--srcc-shadow-sm)]"
              >
                <span className="text-xs font-black tracking-[0.16em] text-[var(--srcc-purple)]">
                  {pillar.number}
                </span>

                <h2 className="mt-7 text-xl font-black tracking-tight text-zinc-950">
                  {pillar.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}