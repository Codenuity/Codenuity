"use client";
import React, { useEffect, useRef, useState } from "react";
import { ServiceHeader } from "./header";
import { SectionCard } from "./card";
import { AiSectionCard } from "./ai";
import { OthersServicesCard } from "./other-service";
import { content } from "@/settings/home";
import { motion, useInView } from "framer-motion";

export const ServiceSection = (): JSX.Element => {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
      className="w-full lg:h-[120vh] h-fit z-10 flex flex-col gap-10 pb-20 lg:mb-48 overflow-y-hidden"
    >
      <ServiceHeader />
      <div className="grid lg:grid-cols-11 grid-cols-12 h-full grid-rows-12 gap-6">
        <SectionCard
          className="lg:col-span-5 lg:row-span-6 col-span-12 row-span-3"
          id="vr"
          content={content.services.ar}
        />

        <AiSectionCard className="lg:col-span-6 lg:row-span-6 lg:col-start-6 col-span-12 row-span-3 row-start-4" />

        <SectionCard
          className="lg:col-span-6 lg:row-span-6 lg:row-start-7 col-span-12 row-span-3 row-start-7"
          id="web"
          content={content.services.web}
        />

        <SectionCard
          className="lg:col-span-5 lg:row-span-4 lg:col-start-7 lg:row-start-7 col-span-12 row-span-2 row-start-10"
          id="cyber"
          content={content.services.cyber}
        />
        <OthersServicesCard
          className="lg:col-span-5 lg:row-span-2 lg:col-start-7 lg:row-start-11 col-span-12 row-start-12"
          id=""
        />
      </div>
    </motion.section>
  );
};
