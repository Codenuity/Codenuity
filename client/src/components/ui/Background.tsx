"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { cn } from "@/utils/cn";


type BackgroundProps = {
  children: React.ReactNode;
  ClassName: string;
};

export function Background({ children, ClassName }: BackgroundProps): JSX.Element {
  return (
    <div
      className={cn(
        "h-fit w-full xl:px-32 xl:pt-44 px-10 md:px-20 md:pt-32 pt-20 bg-black flex flex-col items-center justify-center antialiased",
        ClassName
      )}
    >
      {children}
      <BackgroundBeams />
    </div>
  );
}
