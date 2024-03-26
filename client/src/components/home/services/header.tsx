import { content } from "@/settings/home";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const ServiceHeader = () => {
  return (
    <motion.div className="flex justify-between xl:flex-row flex-col w-full lg:items-end items-start gap-6 lg:gap-0  font-extralight h-fit">
      <div className="lg:w-7/12 w-full md:w-10/12">
        <h2 className="xl:text-4xl text-2xl md:text-2xl leading-snug">{content.servicesHeader}</h2>
      </div>
      <Link
        href="/case-studies"
        className="flex items-center link-with-underline text-neutral-400 font-light text-base md:text-lg xl:text-xl gap-3"
      >
        View all Services <FaArrowRight />
      </Link>
    </motion.div>
  );
};
