import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="srcc-container">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <span className="srcc-eyebrow">
              Smart Royal Career Consultant
            </span>

            <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-7xl">
              Empowering careers.
              <span className="block text-[var(--srcc-purple)]">
                Strengthening organizations.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              Professional career and corporate development solutions built
              around people, performance, opportunity and organizational
              growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="srcc-focus-ring inline-flex items-center justify-center rounded-full bg-[var(--srcc-purple)] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--srcc-purple-dark)]"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="srcc-focus-ring inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-bold text-zinc-900 transition-all duration-200 hover:border-[var(--srcc-purple)] hover:text-[var(--srcc-purple)]"
              >
                Talk to SRCC
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--srcc-gold)]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--srcc-purple-deep)] p-8 shadow-2xl shadow-purple-950/20 sm:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--srcc-gold)]/20 blur-2xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--srcc-gold-light)]">
                  Est. 2013
                </p>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Professional HR & Career Solutions
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-purple-100/75">
                  From career progression to recruitment, HR consulting and
                  organizational support, SRCC provides practical solutions
                  designed around client needs.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-2xl font-black text-white">HR</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-purple-200/70">
                      Consulting
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-2xl font-black text-white">01</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-purple-200/70">
                      Trusted Focus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}