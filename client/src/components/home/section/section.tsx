'use client'

import { content } from "@/settings/home";
import { TextGenerateEffect } from "../../ui/text-generate";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Section = (): JSX.Element => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [view, setView] = useState(inView);
  useEffect(() => setView(inView), [inView]);

  return (
    <section
      ref={ref}
      className={`flex flex-col lg:items-center items-start justify-center h-[50vh] font-extralight lg:w-4/5 w-full mb-40 `}
    >
      {view && (
        <TextGenerateEffect
          words={content?.section}
          className="z-10 xl:text-6xl md:text-5xl  text-3xl  flex justify-center items-center"
        />
      )}
    </section>
  );
};
