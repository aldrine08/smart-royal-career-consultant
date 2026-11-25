import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "performance-management",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function PerformanceManagementPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "Job analysis",
        "Job evaluation",
        "SMART goal setting",
        "Performance milestones",
        "Strategic alignment",
        "Organizational competencies",
        "Management and staff training",
      ]}
    />
  );
}