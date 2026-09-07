export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
};

export const navigation: NavigationItem[] = [
  {
    label: "About",
    href: "/about",
    description: "Discover SRCC, our philosophy, mission, vision and goals.",
  },

  {
    label: "Services",
    href: "/services",
    description: "Explore SRCC's professional career and HR solutions.",
    children: [
      {
        label: "Career Coaching & Mentorship",
        href: "/services/career-coaching",
        description:
          "Career direction, progression, confidence, leadership and networking.",
      },
      {
        label: "HR Consulting",
        href: "/services/hr-consulting",
        description:
          "Practical HR support and best-practice recommendations.",
      },
      {
        label: "HR Audit",
        href: "/services/hr-audit",
        description:
          "Review HR effectiveness, compliance, risk and organizational practices.",
      },
      {
        label: "HR Policies & Procedures",
        href: "/services/hr-policies",
        description:
          "Policies and procedures supporting consistency, fairness and transparency.",
      },
      {
        label: "Performance Management",
        href: "/services/performance-management",
        description:
          "Goal setting, performance frameworks, milestones and organizational alignment.",
      },
      {
        label: "Payroll & Accounting",
        href: "/services/payroll-accounting",
        description:
          "Payroll administration, statutory submissions, records and reporting.",
      },
      {
        label: "HR Outsourcing",
        href: "/services/hr-outsourcing",
        description:
          "Partial or complete HR outsourcing and labour management support.",
      },
      {
        label: "Recruitment & Selection",
        href: "/services/recruitment",
        description:
          "Advertising, screening, interviewing, verification and candidate selection.",
      },
    ],
  },

  {
    label: "Our Approach",
    href: "/our-approach",
    description:
      "Explore SRCC's strategy, service philosophy and client-focused approach.",
  },

  {
    label: "Insights",
    href: "/insights",
    description:
      "Career guidance, HR perspectives, company updates and useful resources.",
  },

  {
    label: "Careers",
    href: "/careers",
    description: "Explore opportunities and connect with SRCC.",
  },

  {
    label: "Contact",
    href: "/contact",
    description: "Talk to SRCC about your career or organizational needs.",
  },
];