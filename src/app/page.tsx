import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="srcc-container py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="srcc-eyebrow">
              Smart Royal Career Consultant
            </span>

            <h1 className="srcc-heading-xl mt-7">
              Empowering careers.
              <span className="block text-[var(--srcc-purple)]">
                Strengthening organizations.
              </span>
            </h1>

            <p className="srcc-body-lg mt-7 max-w-2xl">
              Professional career and corporate development solutions built
              around people, performance, opportunity and organizational
              growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/services">
                Explore Services
              </Button>

              <Button href="/contact" variant="secondary">
                Talk to SRCC
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="srcc-container py-20 md:py-28">
          <SectionHeading
            eyebrow="Our expertise"
            title="Professional solutions across the employment lifecycle."
            description="SRCC's company profile describes services spanning career progression, HR consulting, recruitment, HR outsourcing, performance management and payroll/accounting solutions."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <span className="text-sm font-bold text-[var(--srcc-purple)]">
                01
              </span>

              <h3 className="mt-5 text-xl font-bold text-zinc-950">
                HR Consulting
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Practical human resource support and best-practice
                recommendations for day-to-day organizational challenges.
              </p>
            </Card>

            <Card>
              <span className="text-sm font-bold text-[var(--srcc-purple)]">
                02
              </span>

              <h3 className="mt-5 text-xl font-bold text-zinc-950">
                Recruitment & Selection
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Recruitment support covering advertising, screening,
                interviewing, verification and candidate selection.
              </p>
            </Card>

            <Card>
              <span className="text-sm font-bold text-[var(--srcc-purple)]">
                03
              </span>

              <h3 className="mt-5 text-xl font-bold text-zinc-950">
                Career Coaching
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Career direction, strategic progression, confidence,
                leadership and networking support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--srcc-purple-deep)]">
        <div className="srcc-container py-20 md:py-28">
          <SectionHeading
            eyebrow="SRCC"
            title="A stronger digital experience is coming together."
            description="This is our design-system checkpoint. The full homepage experience will be developed next using these reusable foundations."
          />

          <div className="mt-10">
            <Button href="/contact" variant="gold">
              Work With SRCC
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}