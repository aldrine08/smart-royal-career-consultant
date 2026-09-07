import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="srcc-container py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="srcc-eyebrow">
            Building the SRCC experience
          </span>

          <h2 className="srcc-heading-lg mt-5">
            More than a consultancy website.
          </h2>

          <p className="srcc-body-lg mt-6">
            The complete SRCC digital experience will bring together the
            company's career development, HR consulting, recruitment,
            outsourcing, performance management and corporate support
            capabilities.
          </p>
        </div>
      </section>
    </>
  );
}