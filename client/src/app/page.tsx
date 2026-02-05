import { Background } from "../components/ui/Background";
import { Hero } from "@/components/home/hero/hero";
import { Section } from "@/components/home/section/section";
import { ServiceSection } from "@/components/home/services/service-section";
import { CaseStudySection } from "@/components/home/case-study/CaseStudy";
import Navbar from "@/components/navbar/navbar";
import { Section2 } from "@/components/home/section2/Section2";
import { DesignDeliver } from "@/components/home/design-deliver/DesignDeliver";
import Footer from "@/components/footer/Footer";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <main className="h-fit overflow-x-hidden bg-black text-neutral-50 pt-32 lg:pt-40 relative">
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
      <Navbar className="" />
      <MobileNavbar />
      <Background ClassName="">
        <Hero />
      </Background>
      <div className="flex flex-col items-center justify-center px-10 md:px-20 xl:px-40 2xl:px-52">
        <Section />
        <ServiceSection />
      </div>
      <CaseStudySection />
      <div className="w-full px-10 md:px-20 xl:px-40 2xl:px-52">
        <Section2 />
        <DesignDeliver />
      </div>
      <Footer />
    </main>
  );
}
