"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const Cta = () => {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  const handleMouseMove = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX - rect.width / 2);
    y.set(mouseY - rect.height / 2);
  };

  const handleMouseLeave = () => {
    setHover(false);
    // x.set(-500);
    // y.set(-200);
  };
  return (
    <div
      className="mt-32 flex w-full flex-col justify-between md:flex-row"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col gap-2">
        <h1 className="bg-gradient-to-r from-neutral-50 to-neutral-500 bg-clip-text text-2xl tracking-wide text-transparent md:text-3xl lg:text-5xl">
          Strategic Innovation
        </h1>
        <h2 className="bg-gradient-to-r from-neutral-50 to-neutral-800 bg-clip-text text-xl tracking-wide text-transparent md:text-2xl lg:text-4xl">
          Sets Us Apart
        </h2>
      </div>
      <div className="mt-5 w-full md:mt-0 md:w-1/3">
        <Link
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setHover(true)}
          onMouseMove={handleMouseMove}
          href="/contact"
          className="relative grid h-20 w-full place-items-center overflow-hidden border border-neutral-200 text-2xl transition-all duration-500 ease-in-out hover:scale-105 md:h-32 md:min-h-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: hover ? 1 : 0,
              x: x.get(),
              y: y.get(),
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
              mass: 1,
              stiffness: 100,
              damping: 10,
            }}
            className="absolute z-10 h-[100rem] w-[100rem] rounded-full bg-neutral-50"
          ></motion.div>
          <span
            className={`z-20`}
            style={{
              mixBlendMode: "difference",
            }}
          >
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
