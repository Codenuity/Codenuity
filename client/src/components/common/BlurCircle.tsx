"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";

type BlurCircleProps = {
  className?: string;
  options: any;
};

const BlurCircle: React.FC<BlurCircleProps> = ({ className, options }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={options}
      transition={{
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
        easings: true,
      }}
      className={cn(
        "absolute size-20 rounded-full bg-[#763AF5] blur-2xl filter",
        className
      )}
    />
  );
};

export default BlurCircle;
