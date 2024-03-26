import Image from "next/image";
import { AiSectionCard } from "./ai";
import { content } from "@/settings/home";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

type SectionCardProps = {
  className: string;
  id: string;
};

const TEXTS = [
  "Blockchain",
  "IoT",
  "App",
  "DevOps",
  "QA",
  "API",
  "R&D",
  "EdTech",
];

export const OthersServicesCard = ({ className, id }: SectionCardProps) => {

    const [index, setIndex] = useState(0);

     useEffect(() => {
       const intervalId = setInterval(
         () => setIndex((index) => index + 1),
         3000 // every 3 seconds
       );
       return () => clearTimeout(intervalId);
     }, []);


  return (
    <div
      className={cn(
        "w-full bg-gradient-to-br from-transparent to-purple-900 via-transparent   backdrop-filter backdrop-blur-lg h-full bg-opacity-20 p-5 border border-neutral-900 rounded-2xl gap-5 flex flex-col justify-between items-center overflow-y-hidden",
        className
      )}
    >
      <div className="h-full w-full justify-center   flex items-center">
        <h1 className="text-4xl text-neutral-50">
          <TextTransition >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </div>
    </div>
  );
};
