"use client";

import { content } from "@/settings/home";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const ServiceHeader = () => {
  return (
    <motion.div className="flex h-fit w-full flex-col items-start justify-between gap-6 font-extralight lg:items-end lg:gap-0 xl:flex-row">
      <div className="w-full md:w-10/12 lg:w-7/12">
        <h2 className="text-2xl leading-snug md:text-2xl xl:text-4xl">
          {content.servicesHeader}
        </h2>
      </div>
      <Link
        href="/case-studies"
        className="link-with-underline flex items-center gap-3 text-base font-light text-neutral-400 md:text-lg xl:text-xl"
      >
        View all Services <FaArrowRight />
      </Link>
    </motion.div>
  );
};
