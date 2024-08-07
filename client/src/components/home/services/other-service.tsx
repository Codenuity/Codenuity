"use client";

import TextTransition from "react-text-transition";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        "flex h-full w-full flex-col items-center justify-between gap-5 overflow-y-hidden rounded-2xl border border-neutral-900 bg-opacity-20 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-5 backdrop-blur-lg backdrop-filter",
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-4xl text-neutral-50">
          <TextTransition>{TEXTS[index % TEXTS.length]}</TextTransition>
        </h1>
      </div>
    </div>
  );
};
