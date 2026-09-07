export type TrustMetric = {
  value: string;
  label: string;
  description: string;
  type: "number" | "text";
};

export const trustMetrics: TrustMetric[] = [
  {
    value: "2013",
    label: "Established",
    description:
      "Smart Royal Career Consultant was established in 2013.",
    type: "number",
  },
  {
    value: "10+",
    label: "Qualified staff",
    description:
      "The company profile states that SRCC has over ten qualified and competent staff countrywide.",
    type: "number",
  },
  {
    value: "Africa",
    label: "& beyond",
    description:
      "The recruitment and CV database section describes services and coverage across the African continent and beyond.",
    type: "text",
  },
  {
    value: "Client",
    label: "Focused",
    description:
      "Customer-focused solutions and service are recurring themes within SRCC's documented strategy.",
    type: "text",
  },
];

export const operatingPrinciples = [
  {
    title: "Relationships",
    description:
      "SRCC identifies strategic alliances with clients and business partners as a key to success.",
  },
  {
    title: "Technology",
    description:
      "The company profile highlights technological expertise and advancing technology in its planning and career solutions.",
  },
  {
    title: "Support",
    description:
      "Service, support, internal training and follow-up are identified as important elements of SRCC's approach.",
  },
];