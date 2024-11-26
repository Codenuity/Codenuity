import ServiceHeroContent from "@/components/services/hero-content";
import dynamic from "next/dynamic";
import React from "react";
const ParticlesBackground = dynamic(
  () => import("@/components/ui/ParticlesBackground"),
  {
    ssr: false,
  }
);

function Services() {
  return (
    <>
      <ServiceHeroContent className="mx-auto h-dvh max-h-[65rem] min-h-[45rem] 2xl:container" />
      <ParticlesBackground />
    </>
  );
}

export default Services;
