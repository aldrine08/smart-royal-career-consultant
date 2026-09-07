import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import WhySRCC from "@/components/home/WhySRCC";
import CareerPeople from "@/components/home/CareerPeople";
import HROrganizationalSolutions from "@/components/home/HROrganizationalSolutions";
import ExperienceTrust from "@/components/home/ExperienceTrust";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhySRCC />
      <CareerPeople />
      <HROrganizationalSolutions />
      <ExperienceTrust />
    </>
  );
}