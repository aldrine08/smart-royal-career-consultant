import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";
import { organizationalSolutions } from "@/data/organizational";

const service = services.find(
  (item) => item.id === "hr-audit",
)!;

const solution = organizationalSolutions.find(
  (item) => item.id === "hr-audit",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function HRAuditPage() {
  return (
    <ServicePage
      service={service}
      capabilities={solution.capabilities}
    />
  );
}