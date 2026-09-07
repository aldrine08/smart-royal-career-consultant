export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  href: string;
  category: "Career" | "HR" | "Organization";
};

export const services: Service[] = [
  {
    id: "career-coaching",
    number: "01",
    title: "Career Coaching & Mentorship",
    shortTitle: "Career Coaching",
    description:
      "Practical guidance for defining career direction and planning your next professional move.",
    detail:
      "SRCC's career coaching approach addresses career direction, job opportunities, confidence, presentation, leadership and networking skills.",
    href: "/services/career-coaching",
    category: "Career",
  },

  {
    id: "hr-consulting",
    number: "02",
    title: "HR Consulting",
    shortTitle: "HR Consulting",
    description:
      "Professional human resource support for day-to-day organizational challenges and decisions.",
    detail:
      "SRCC provides technical HR assistance and best-practice recommendations intended to help organizations make informed decisions, minimize risks and control employee-management costs.",
    href: "/services/hr-consulting",
    category: "HR",
  },

  {
    id: "hr-audit",
    number: "03",
    title: "HR Audit",
    shortTitle: "HR Audit",
    description:
      "A structured review of HR effectiveness, compliance, risk and people-management practices.",
    detail:
      "The documented HR Audit package includes areas such as staffing and hiring, benefits administration, HR administration, employment practices, education and training, performance management, compensation and terminations.",
    href: "/services/hr-audit",
    category: "HR",
  },

  {
    id: "hr-policies",
    number: "04",
    title: "HR Policies & Procedures",
    shortTitle: "HR Policies",
    description:
      "Structured policies and procedures that support consistency, fairness, transparency and operational efficiency.",
    detail:
      "SRCC describes a process that includes establishing the need for a policy, developing its content, drafting, reviewing, approving, implementing, communicating and updating policies.",
    href: "/services/hr-policies",
    category: "Organization",
  },

  {
    id: "performance-management",
    number: "05",
    title: "Performance Management",
    shortTitle: "Performance Management",
    description:
      "Performance frameworks connecting organizational objectives, departments and individual goals.",
    detail:
      "SRCC describes performance management as a future-focused process incorporating SMART goal setting, milestones, measurable results, training and alignment with strategic objectives.",
    href: "/services/performance-management",
    category: "Organization",
  },

  {
    id: "payroll-accounting",
    number: "06",
    title: "Payroll & Accounting Solutions",
    shortTitle: "Payroll & Accounting",
    description:
      "Reliable payroll administration and related financial record and compliance support.",
    detail:
      "The profile describes payroll processing, statutory deductions, employee registration, returns, salary payments, payslip generation, updated records and bookkeeping and audit support.",
    href: "/services/payroll-accounting",
    category: "Organization",
  },

  {
    id: "hr-outsourcing",
    number: "07",
    title: "HR Outsourcing",
    shortTitle: "HR Outsourcing",
    description:
      "Flexible HR outsourcing solutions designed to give organizations access to expertise while focusing on core operations.",
    detail:
      "SRCC describes partial or total HR outsourcing covering areas ranging from payroll and administration to broader HR functions and labour-management support.",
    href: "/services/hr-outsourcing",
    category: "HR",
  },

  {
    id: "recruitment",
    number: "08",
    title: "Recruitment & Selection",
    shortTitle: "Recruitment & Selection",
    description:
      "End-to-end recruitment support tailored to client hiring needs and requirements.",
    detail:
      "The documented process covers headhunting, advertising, CV database sourcing, shortlisting, job advertising, interviews, screening, scheduling, reference checks and document verification.",
    href: "/services/recruitment",
    category: "Career",
  },
];