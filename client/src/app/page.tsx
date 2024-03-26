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
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import MobileNavbar from "@/components/navbar/MobileNavbar";

export default function Home() {
  return (
    <main className="bg-black text-neutral-50 h-fit overflow-x-hidden ">
      <Navbar className="" />
      <MobileNavbar />
      <Background>
        <Hero />
      </Background>
      <div className="flex flex-col justify-center px-10 md:px-20 items-center 2xl:px-52 xl:px-40">
        <Section />
        <ServiceSection />
        {/* <ClientSection className="" /> */}
      </div>
      <CaseStudySection />
      <TestimonialSection />
      <div className="2xl:px-52 xl:px-40 px-10 md:px-20 w-full">
        <Section2 />
        <DesignDeliver />
      </div>
      <ParticlesBackground />
      <Footer />
    </main>
  );
}
