import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact SRCC",
  description:
    "Contact Smart Royal Career Consultant for career development, HR consulting, recruitment and organizational support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--srcc-purple-deep)] text-white">
        <div className="srcc-container py-20 md:py-28">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--srcc-gold)]">
            <span className="h-0.5 w-7 bg-[var(--srcc-gold)]" />
            Contact SRCC
          </span>

          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.94] tracking-[-0.055em]">
            Let's start a conversation.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100/65">
            Tell us about your needs and choose the service that best matches
            what you are looking for.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </main>
  );
}