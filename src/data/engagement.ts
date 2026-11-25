export type EngagementPath = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
};

export const engagementPaths: EngagementPath[] = [
  {
    id: "individuals",
    eyebrow: "For Individuals",
    title: "Build clarity around your next career move.",
    description:
      "Explore career coaching and mentorship designed around career direction, professional development and strategic progression.",
    points: [
      "Career direction",
      "Career opportunities",
      "Confidence and presentation",
      "Leadership and networking",
    ],
    href: "/contact?type=career",
    cta: "Explore Career Coaching",
  },
  {
    id: "organizations",
    eyebrow: "For Organizations",
    title: "Strengthen your people and HR systems.",
    description:
      "Explore SRCC's organizational solutions across HR consulting, recruitment, performance, payroll, outsourcing and related people-management needs.",
    points: [
      "HR consulting",
      "Recruitment and selection",
      "Performance management",
      "HR outsourcing",
      "Payroll and accounting",
    ],
    href: "/contact?type=organization",
    cta: "Explore HR Solutions",
  },
];