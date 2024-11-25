"use client";
import Link from "next/link";
import { TextGenerateEffect } from "../../ui/text-generate";
import Image from "next/image";
import { content } from "@/settings/home";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Hero = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center font-light text-neutral-50 lg:justify-end xl:w-4/5">
      <div className="flex flex-col gap-y-10 xl:mt-20">
        <TextGenerateEffect
          words={content.hero}
          className="z-10 mt-10 text-2xl md:text-4xl xl:text-5xl"
        />
        <motion.span
          className="flex items-center gap-3 overflow-y-hidden text-lg text-neutral-400 md:text-xl xl:text-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
        >
          <Link
            href="/case-studies"
            className="link-with-underline z-10 flex w-fit items-center gap-3 font-light hover:text-neutral-50"
          >
            View our Case Studies
          </Link>
          <ArrowRight />
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
