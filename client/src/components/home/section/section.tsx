"use client";

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
      className={`flex min-h-dvh w-full flex-col items-start justify-center font-extralight lg:w-4/5 lg:items-center`}
    >
      {view && (
        <TextGenerateEffect
          words={content?.section}
          className="z-10 flex items-center justify-center text-3xl md:text-5xl xl:text-6xl"
        />
      )}
    </section>
  );
};
