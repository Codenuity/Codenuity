"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type BlurCircleProps = {
  className?: string;
  options:any
};

const BlurCircle: React.FC<BlurCircleProps> = ({ className, options }) => {
  return (
    <motion.div
      initial={{x:0,y:0  }}
      animate={options}
      transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, easings: true ,  }}
      className={cn(
        "size-20 bg-[#763AF5] absolute rounded-full filter blur-2xl",
        className
      )}
    />
  );
};

export default BlurCircle;
