"use client";

import DesignLogo from "@/assets/animated/Desing";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import IconSection from "./IconSection";
import ContentSection from "./ContentSection";
import Link from "next/link";
import { useState } from "react";
import Cta from "./Cta";

export const DesignDeliver = () => {


  return (
    <div className="flex flex-col pt-48 lg:py-20 gap-y-0 lg:gap-0">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <IconSection />
        <ContentSection />
      </div>
      <Cta />
    </div>
  );
};
