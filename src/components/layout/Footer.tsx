import Link from "next/link";

const services = [
  "HR Consulting",
  "Career Coaching",
  "HR Audit",
  "HR Outsourcing",
  "Recruitment & Selection",
  "Payroll & Accounting",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--srcc-black)] text-white">
      <div className="srcc-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--srcc-purple)] text-sm font-black">
                SR
              </span>

              <div>
                <div className="text-sm font-extrabold">SMART ROYAL</div>
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                  Career Consultant
                </div>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-400">
              Professional career and corporate development solutions designed
              to support individuals and organizations through changing
              employment and business environments.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--srcc-gold)]">
              Services
            </h2>

            <ul className="space-y-3 text-sm text-zinc-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--srcc-gold)]">
              Contact
            </h2>

            <div className="space-y-3 text-sm leading-6 text-zinc-400">
              <p>Nairobi, Kenya</p>

              <p>
                <a
                  href="tel:+254716226427"
                  className="transition-colors hover:text-white"
                >
                  +254 716 226 427
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@smartroyalcareer.co.ke"
                  className="transition-colors hover:text-white"
                >
                  info@smartroyalcareer.co.ke
                </a>
              </p>

              <p>www.smartroyalcareers.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Smart Royal Career Consultant. All
            rights reserved.
          </p>

          <Link
            href="/contact"
            className="font-semibold text-zinc-300 transition-colors hover:text-white"
          >
            Speak with SRCC
          </Link>
        </div>
      </div>
    </footer>
  );
}