import React from "react";
import { CaseStydyHeader } from "./Header";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudy } from "@/settings/case-study";

export const CaseStudySection = (): JSX.Element => {
  return (
    <div className="min-h-screen h-fit bg-neutral-50 w-full 2xl:px-52 xl:px-40 px-10 md:px-20 py-20">
      <CaseStydyHeader />
      <div className="grid grid-cols-12 lg:grid-rows-12 grid-rows-10 h-full gap-6 mt-10 ">
        <CaseStudyCard
          content={caseStudy[0]}
          className="lg:col-span-4 lg:row-span-6 col-span-12 row-span-2"
        />
        <CaseStudyCard
          content={caseStudy[1]}
          className="lg:col-span-4 lg:row-span-6 lg:col-start-5 col-span-12 row-span-2 row-start-3"
        />
        <CaseStudyCard
          content={caseStudy[2]}
          className="lg:col-span-4 lg:row-span-6 lg:col-start-9 col-span-12 row-span-2 row-start-5"
        />
        <CaseStudyCard
          content={caseStudy[3]}
          className="lg:col-span-7 lg:row-span-6 lg:row-start-7 col-span-12 row-span-2 row-start-7"
        />
        <CaseStudyCard
          content={caseStudy[4]}
          className="lg:col-span-5 lg:row-span-6 lg:col-start-8 lg:row-start-7 col-span-12 row-span-2 row-start-9"
        />
      </div>
    </div>
  );
};
