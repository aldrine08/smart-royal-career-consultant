import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.id === "career-coaching",
)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function CareerCoachingPage() {
  return (
    <ServicePage
      service={service}
      capabilities={[
        "Career direction",
        "Career opportunities",
        "Career and salary feedback",
        "Confidence development",
        "Presentation skills",
        "Leadership skills",
        "Networking skills",
      ]}
    />
  );
}