export type OrganizationalSolution = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
};

export const organizationalSolutions: OrganizationalSolution[] = [
  {
    id: "hr-audit",
    number: "01",
    title: "HR Audit",
    category: "Risk & Compliance",
    description:
      "A structured review of HR effectiveness, efficiency, compliance and people-management practices.",
    capabilities: [
      "Staffing and hiring",
      "Benefits administration",
      "HR administration",
      "Employment practices",
      "Training and education",
      "Performance management",
      "Compensation",
      "Terminations",
    ],
  },

  {
    id: "hr-consulting",
    number: "02",
    title: "HR Consulting",
    category: "Professional Support",
    description:
      "Practical technical assistance and best-practice recommendations for day-to-day human resource challenges.",
    capabilities: [
      "Human resource best practices",
      "Interviewing guidance",
      "Workplace policies and procedures",
      "Record-keeping requirements",
      "Labour law compliance",
      "Day-to-day HR decision support",
    ],
  },

  {
    id: "hr-policies",
    number: "03",
    title: "HR Policies & Procedures",
    category: "Governance",
    description:
      "Structured policies and procedures that support operational efficiency, fairness, transparency and consistent decision-making.",
    capabilities: [
      "Establish policy requirements",
      "Develop policy content",
      "Draft policies and procedures",
      "Review and approval",
      "Implementation",
      "Communication",
      "Policy review and updates",
    ],
  },

  {
    id: "performance",
    number: "04",
    title: "Performance Management",
    category: "People & Performance",
    description:
      "Performance systems designed to connect strategic objectives, departmental goals and individual goals.",
    capabilities: [
      "Job analysis",
      "Job evaluation",
      "SMART goal setting",
      "Performance milestones",
      "Organizational alignment",
      "Management and staff training",
    ],
  },

  {
    id: "payroll",
    number: "05",
    title: "Payroll & Accounting",
    category: "Administration",
    description:
      "Reliable payroll administration and related records, statutory and accounting support.",
    capabilities: [
      "Employee and company registration",
      "Monthly payroll processing",
      "Statutory returns",
      "Statutory deductions",
      "Salary transfers",
      "Payslip generation",
      "Records and statements",
      "Bookkeeping and audit",
    ],
  },

  {
    id: "outsourcing",
    number: "06",
    title: "HR Outsourcing",
    category: "HR Operations",
    description:
      "Partial or total HR outsourcing designed to provide organizations with access to professional HR expertise.",
    capabilities: [
      "HR administration",
      "Payroll support",
      "Operational HR support",
      "Strategic HR capacity",
      "Labour-management support",
      "Employee-related administration",
    ],
  },

  {
    id: "recruitment",
    number: "07",
    title: "Recruitment & Selection",
    category: "Talent Acquisition",
    description:
      "Recruitment support tailored to client requirements, from advertising and screening through selection and verification.",
    capabilities: [
      "Job advertising",
      "Headhunting",
      "CV database sourcing",
      "Shortlisting",
      "Interviews and screening",
      "Interview scheduling",
      "Reference checks",
      "Document verification",
    ],
  },
];

export const employmentLifecycle = [
  {
    number: "01",
    label: "Selection",
  },
  {
    number: "02",
    label: "Recruitment",
  },
  {
    number: "03",
    label: "Employment",
  },
  {
    number: "04",
    label: "Benefits",
  },
  {
    number: "05",
    label: "Retirement",
  },
];