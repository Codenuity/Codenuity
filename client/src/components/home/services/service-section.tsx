"use client";

import { ServiceHeader } from "./header";
import { SectionCard } from "./card";
import { AiSectionCard } from "./ai";
import { OthersServicesCard } from "./other-service";
import { content } from "@/settings/home";
import { motion, useInView } from "framer-motion";

export const ServiceSection = () => {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
      className="z-10 flex h-fit w-full flex-col gap-10 overflow-y-hidden pb-20 lg:mb-48 lg:h-[120vh]"
    >
      <ServiceHeader />
      <div className="grid h-full grid-cols-12 grid-rows-12 gap-6 lg:grid-cols-11">
        <SectionCard
          className="col-span-12 row-span-3 lg:col-span-5 lg:row-span-6"
          id="vr"
          content={content.services.ar}
        />
        <AiSectionCard className="col-span-12 row-span-3 row-start-4 lg:col-span-6 lg:col-start-6 lg:row-span-6" />

        <SectionCard
          className="col-span-12 row-span-3 row-start-7 lg:col-span-6 lg:row-span-9 lg:row-start-7"
          id="web"
          content={content.services.web}
        />
        <SectionCard
          className="col-span-12 row-span-2 row-start-10 lg:col-span-5 lg:col-start-7 lg:row-span-5 lg:row-start-7"
          id="cyber"
          content={content.services.cyber}
        />
        <OthersServicesCard
          className="col-span-12 row-start-12 lg:col-span-5 lg:col-start-7 lg:row-span-4 lg:row-start-12"
          id=""
        />
      </div>
    </motion.section>
  );
};
