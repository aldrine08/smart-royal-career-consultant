import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "hr-consulting",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function HRConsultingPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "Human Resource Best Practices",
        "Interviewing guidance",
        "Workplace Policies and Procedures",
        "Record-Keeping Requirements",
        "Labour Laws Compliance",
      ]}
    />
  );
}