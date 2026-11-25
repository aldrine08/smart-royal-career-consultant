"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const allServices = [
  {
    id: "career-coaching",
    label: "Career Coaching & Mentorship",
    audience: "career",
  },
  {
    id: "hr-consulting",
    label: "HR Consulting",
    audience: "organization",
  },
  {
    id: "hr-audit",
    label: "HR Audit",
    audience: "organization",
  },
  {
    id: "hr-policies",
    label: "HR Policies & Procedures",
    audience: "organization",
  },
  {
    id: "performance-management",
    label: "Performance Management",
    audience: "organization",
  },
  {
    id: "payroll-accounting",
    label: "Payroll & Accounting",
    audience: "organization",
  },
  {
    id: "hr-outsourcing",
    label: "HR Outsourcing",
    audience: "organization",
  },
  {
    id: "recruitment",
    label: "Recruitment & Selection",
    audience: "organization",
  },
  {
    id: "general",
    label: "General Enquiry",
    audience: "general",
  },
];

export default function ContactForm() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const serviceParam = searchParams.get("service");

  /*
   * Determine which services should appear in the dropdown.
   *
   * /contact
   *      -> all services
   *
   * /contact?type=career
   *      -> career-related services
   *
   * /contact?type=organization
   *      -> organization-related services
   *
   * /contact?service=hr-audit
   *      -> only HR Audit
   */
  const relevantServices = allServices.filter((service) => {
    if (serviceParam) {
      return service.id === serviceParam;
    }

    if (type === "career") {
      return service.audience === "career";
    }

    if (type === "organization") {
      return service.audience === "organization";
    }

    return true;
  });

  /*
   * Determine the service selected when the page opens.
   */
  const initialService = serviceParam
    ? serviceParam
    : type === "career"
      ? "career-coaching"
      : "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: initialService,
    reason: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof typeof formData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Temporary frontend submission.
     *
     * Later this will be replaced with the real
     * Next.js backend/email workflow.
     */
    console.log("SRCC enquiry:", formData);

    setSubmitted(true);
  };

  const selectedService =
    allServices.find((service) => service.id === formData.service);

  return (
    <section className="bg-zinc-50">
      <div className="srcc-container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Contact information */}
          <aside>
            <span className="srcc-eyebrow">Reach SRCC</span>

            <h2 className="srcc-heading-md mt-5 text-zinc-950">
              Tell us what you need.
            </h2>

            <p className="srcc-body mt-5 max-w-md">
              Complete the enquiry form and provide enough information for the
              SRCC team to understand the reason for your enquiry.
            </p>

            <div className="mt-10 space-y-6 border-t border-zinc-200 pt-8">
              {/* Phone */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                  Phone
                </p>

                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+254716226427"
                    className="block text-sm font-bold text-zinc-900 transition-colors hover:text-[var(--srcc-purple)]"
                  >
                    +254 716 226 427
                  </a>

                  <a
                    href="tel:+254721287770"
                    className="block text-sm font-bold text-zinc-900 transition-colors hover:text-[var(--srcc-purple)]"
                  >
                    +254 721 287 770
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                  Email
                </p>

                <div className="mt-2 space-y-1">
                  <a
                    href="mailto:info@smartroyalcareer.co.ke"
                    className="block text-sm font-bold text-zinc-900 transition-colors hover:text-[var(--srcc-purple)]"
                  >
                    info@smartroyalcareer.co.ke
                  </a>

                  <a
                    href="mailto:smartroyalcareer@gmail.com"
                    className="block text-sm font-bold text-zinc-900 transition-colors hover:text-[var(--srcc-purple)]"
                  >
                    smartroyalcareer@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                  Location
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-zinc-900">
                  P.O. Box 79376-00200
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[var(--srcc-shadow-md)] sm:p-9 md:p-10">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--srcc-purple-soft)] text-2xl font-bold text-[var(--srcc-purple)]">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-zinc-950">
                  Enquiry received
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                  Thank you for contacting Smart Royal Career Consultant.
                  Your enquiry has been captured for the next stage of our
                  website workflow.
                </p>

                {selectedService && (
                  <div className="mt-7 rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-bold text-zinc-600">
                    Service: {selectedService.label}
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Pathway */}
                {type && (
                  <div className="rounded-2xl border border-[var(--srcc-purple)]/15 bg-[var(--srcc-purple-soft)] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--srcc-purple)]">
                      Enquiry pathway
                    </p>

                    <p className="mt-2 text-lg font-black text-zinc-950">
                      {type === "career"
                        ? "Career Development"
                        : type === "organization"
                          ? "HR & Organizational Solutions"
                          : "General Enquiry"}
                    </p>
                  </div>
                )}

                {/* Service context */}
                {serviceParam && selectedService && (
                  <div className="rounded-2xl border border-[var(--srcc-gold)]/30 bg-[var(--srcc-gold-soft)] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--srcc-gold-dark)]">
                      Service selected
                    </p>

                    <p className="mt-2 text-lg font-black text-zinc-950">
                      {selectedService.label}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      You arrived here from a dedicated SRCC service page. The
                      relevant service has been selected for your enquiry.
                    </p>
                  </div>
                )}

                {/* Full name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Full Name{" "}
                    <span className="text-[var(--srcc-purple)]">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[var(--srcc-purple)] focus:ring-4 focus:ring-purple-500/10"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone + email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-zinc-900"
                    >
                      Phone Number{" "}
                      <span className="text-[var(--srcc-purple)]">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[var(--srcc-purple)] focus:ring-4 focus:ring-purple-500/10"
                      placeholder="+254..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-zinc-900"
                    >
                      Email Address{" "}
                      <span className="text-[var(--srcc-purple)]">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[var(--srcc-purple)] focus:ring-4 focus:ring-purple-500/10"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Service Required{" "}
                    <span className="text-[var(--srcc-purple)]">*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(event) =>
                      updateField("service", event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition-all focus:border-[var(--srcc-purple)] focus:ring-4 focus:ring-purple-500/10"
                  >
                    <option value="">Select a service</option>

                    {relevantServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Reason for Reaching Out{" "}
                    <span className="text-[var(--srcc-purple)]">*</span>
                  </label>

                  <input
                    id="reason"
                    name="reason"
                    type="text"
                    required
                    value={formData.reason}
                    onChange={(event) =>
                      updateField("reason", event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[var(--srcc-purple)] focus:ring-4 focus:ring-purple-500/10"
                    placeholder="Briefly tell us why you're reaching out"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Additional Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className="mt-2 w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[var(--srcc-purple)] focus:ring-4 focus:ring-purple-500/10"
                    placeholder="Add any additional information that may help SRCC understand your enquiry"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="srcc-focus-ring inline-flex w-full items-center justify-center rounded-full bg-[var(--srcc-purple)] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--srcc-purple-dark)]"
                >
                  Submit Enquiry

                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </button>

                <p className="text-center text-xs leading-5 text-zinc-400">
                  By submitting this form, you are providing your contact
                  details for the purpose of responding to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}