import NotFoundContent from "@/components/not-found/Content";
import Gif from "@/components/not-found/Gif";
import { Background } from "@/components/ui/Background";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Background ClassName="h-screen">
        <div className="relative w-full h-full flex  justify-center items-center">
          <div className="z-30 text-neutral-50 w-full h-1/2 md:-mt-10 lg:mt-0 -mt-32">
            <NotFoundContent />
          </div>
          <div className="size-fit absolute lg:-bottom-64 md:-bottom-64 -bottom-20 z-20">
            <Gif />
          </div>
        </div>
      </Background>
      <ParticlesBackground />
    </div>
  );
};

export default NotFound;
