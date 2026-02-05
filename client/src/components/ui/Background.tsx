"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { cn } from "@/utils/cn";

type BackgroundProps = {
  children: React.ReactNode;
  ClassName: string;
};

export function Background({
  children,
  ClassName,
}: BackgroundProps): JSX.Element {
  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-center bg-black px-10 pt-20 antialiased md:px-20 md:pt-32 lg:pt-72 xl:px-32 xl:pt-44 2xl:pt-20 overflow-hidden",
        ClassName
      )}
    >
      <BackgroundBeams />
      {children}
    </div>
  );
}
