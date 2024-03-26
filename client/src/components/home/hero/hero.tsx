"use client";
import Link from "next/link";
import { TextGenerateEffect } from "../../ui/text-generate";
import Image from "next/image";
import { content } from "@/settings/home";
import { motion } from "framer-motion";
import { LiaSpaceShuttleSolid } from "react-icons/lia";

export const Hero = (): JSX.Element => {
  return (
    <div className="flex h-screen flex-col items-center text-neutral-50 font-light justify-center lg:justify-end xl:w-4/5 w-full">
      <div className="flex flex-col xl:mt-20 gap-y-10 ">
        <TextGenerateEffect words={content.hero} className="z-10 xl:text-5xl md:text-4xl text-2xl mt-10" />
        <motion.span
          className="overflow-y-hidden  text-neutral-400 flex gap-3 xl:text-2xl md:text-xl text-lg items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
        >
          <Link
            href="/case-studies"
            className="flex font-light link-with-underline hover:text-neutral-50 w-fit items-center gap-3 z-10 "
          >
            View our Case Studies
          </Link>
          <LiaSpaceShuttleSolid />
        </motion.span>
      </div>
      <div className="">
        <Image
          src="/images/black-hole.png"
          alt="codenuity-blackhole"
          width={1000}
          height={10}
        />
      </div>
    </div>
  );
};
