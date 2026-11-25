import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Smart Royal Career Consultant's career development, HR consulting, recruitment, outsourcing, performance and payroll services.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Professional solutions for careers and organizations."
        description="Explore SRCC's documented service portfolio across career development, human resources, recruitment, performance, payroll and organizational support."
      />

      <section className="bg-zinc-50">
        <div className="srcc-container py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group srcc-focus-ring rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-[var(--srcc-shadow-sm)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--srcc-purple)] hover:shadow-[var(--srcc-shadow-md)] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-[0.16em] text-[var(--srcc-purple)]">
                    {service.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-all duration-300 group-hover:bg-[var(--srcc-purple)] group-hover:text-white">
                    →
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-black tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-[var(--srcc-purple)]">
                  {service.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {service.description}
                </p>

                <div className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 group-hover:text-[var(--srcc-purple)]">
                  Explore service
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}