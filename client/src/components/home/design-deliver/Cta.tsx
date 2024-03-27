'use client'

import { motion, useAnimation, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

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
      className="w-full flex justify-between md:flex-row flex-col mt-32"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-5xl md:text-3xl text-2xl tracking-wide  bg-gradient-to-r from-neutral-50 to-neutral-500 bg-clip-text text-transparent">
          Strategic Innovation
        </h1>
        <h2 className="lg:text-4xl md:text-2xl text-xl tracking-wide  bg-gradient-to-r from-neutral-50 to-neutral-800 bg-clip-text text-transparent">
          Sets Us Apart
        </h2>
      </div>
      <div className="md:w-1/3 w-full mt-5 md:mt-0">
        <Link
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setHover(true)}
          onMouseMove={handleMouseMove}
          href="/"
          className="w-full border border-neutral-200 grid place-items-center h-20 md:min-h-full hover:scale-105 transition-all md:h-32 ease-in-out duration-500 text-2xl relative overflow-hidden"
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
            className="bg-neutral-50 absolute h-[100rem] w-[100rem] rounded-full z-10 "
          ></motion.div>
          <span className={`z-20`} style={{
            mixBlendMode: 'difference'
          }}>Contact Us</span>
        </Link>
      </div>
    </div>
  );
}

export default Cta