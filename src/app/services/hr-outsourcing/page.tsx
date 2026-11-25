import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "hr-outsourcing",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function HROutsourcingPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "HR administration",
        "Payroll support",
        "Operational HR",
        "Strategic HR capacity",
        "Labour management",
        "Employee-related administration",
      ]}
    />
  );
}