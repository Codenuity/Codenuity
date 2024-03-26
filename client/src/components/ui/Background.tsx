"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";


type BackgroundProps = {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps): JSX.Element {
  return (
    <div className="h-fit w-full xl:px-32 xl:pt-44 px-10 md:px-20 md:pt-32 pt-20 bg-black flex flex-col items-center justify-center antialiased">
      {children}
      <BackgroundBeams />
    </div>
  );
}
