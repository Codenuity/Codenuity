import { Background } from "../components/ui/Background";
import { Hero } from "@/components/home/hero/hero";
import { Section } from "@/components/home/section/section";
import { ClientSection } from "@/components/home/clients/clients";
import { ServiceSection } from "@/components/home/services/service-section";
import { CaseStudySection } from "@/components/home/case-study/CaseStudy";
import Navbar from "@/components/navbar/navbar";
import { TestimonialSection } from "@/components/home/testimonials/Testimonails";
import { Section2 } from "@/components/home/section2/Section2";
import { DesignDeliver } from "@/components/home/design-deliver/DesignDeliver";
import Footer from "@/components/footer/Footer";
import MobileNavbar from "@/components/navbar/MobileNavbar";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
});

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="h-fit overflow-x-hidden bg-black text-neutral-50">
      <Navbar className="" />
      <MobileNavbar />
      <Background ClassName="">
        <Hero />
      </Background>
      <div className="flex flex-col items-center justify-center px-10 md:px-20 xl:px-40 2xl:px-52">
        <Section />
        <ServiceSection />
        {/* <ClientSection className="" /> */}
      </div>
      <CaseStudySection />
      {/* <TestimonialSection /> */}
      <div className="w-full px-10 md:px-20 xl:px-40 2xl:px-52">
        <Section2 />
        <DesignDeliver />
      </div>
      <Particles />
      <Footer />
    </main>
  );
}
