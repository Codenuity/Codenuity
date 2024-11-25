"use client";

import IconSection from "./IconSection";
import ContentSection from "./ContentSection";
import Cta from "./Cta";

export const DesignDeliver = () => {
  return (
    <div className="flex flex-col gap-y-0 lg:gap-0 lg:py-20">
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <IconSection />
        <ContentSection />
      </div>
      <Cta />
    </div>
  );
};
