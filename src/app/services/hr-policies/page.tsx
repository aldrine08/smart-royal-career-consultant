import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "hr-policies",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function HRPoliciesPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "Establish the need for a policy",
        "Develop policy content",
        "Draft the policy",
        "Write the procedure",
        "Review by key parties",
        "Approval",
        "Implementation",
        "Policy review and update",
        "Communicate policy changes",
      ]}
    />
  );
}