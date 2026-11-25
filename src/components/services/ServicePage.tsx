import Link from "next/link";
import type { Service } from "@/data/services";
import PageHero from "@/components/ui/PageHero";

type ServicePageProps = {
  service: Service;
  capabilities?: string[];
  additionalContent?: React.ReactNode;
};

export default function ServicePage({
  service,
  capabilities = [],
  additionalContent,
}: ServicePageProps) {
  return (
    <main>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.description}
      >
        <Link
          href={`/contact?service=${service.id}`}
          className="srcc-focus-ring inline-flex items-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
        >
          Enquire About This Service
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </PageHero>

      <section className="bg-white">
        <div className="srcc-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="srcc-eyebrow">
                SRCC Service
              </span>

              <h2 className="srcc-heading-md mt-5">
                Practical support designed around client needs.
              </h2>
            </div>

            <div>
              <p className="srcc-body-lg">
                {service.detail}
              </p>

              {capabilities.length > 0 && (
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--srcc-gold)]" />

                        <span className="text-sm leading-6 text-zinc-700">
                          {capability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {additionalContent}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="srcc-container py-20 md:py-28">
          <div className="rounded-[2rem] bg-[var(--srcc-black)] p-8 text-white sm:p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
              Need this service?
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              Tell SRCC what you are looking for.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
              Submit an enquiry and provide the information needed for the SRCC
              team to understand your requirements.
            </p>

            <Link
              href={`/contact?service=${service.id}`}
              className="srcc-focus-ring mt-8 inline-flex items-center rounded-full bg-[var(--srcc-gold)] px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-gold-light)]"
            >
              Start an Enquiry
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