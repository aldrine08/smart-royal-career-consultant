import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "payroll-accounting",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function PayrollAccountingPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "Company and employee registration",
        "Monthly payroll processing",
        "Statutory returns",
        "Statutory deductions",
        "Salary payments",
        "Payslip generation",
        "Updated records and statements",
        "Bookkeeping and audit",
      ]}
    />
  );
}