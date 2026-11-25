import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "recruitment",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function RecruitmentPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "Job advertising",
        "Headhunting",
        "CV database sourcing",
        "Shortlisting",
        "Interviews and screening",
        "Interview scheduling",
        "Reference checks",
        "Document verification",
      ]}
    />
  );
}