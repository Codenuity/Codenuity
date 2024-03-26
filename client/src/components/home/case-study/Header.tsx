import { ViewCaseStudyButton } from "@/components/ui/button"

export const CaseStydyHeader = () =>{
    return (
      <div className="w-full flex justify-between lg:items-end items-start font-Inter lg:flex-row flex-col gap-6 lg:gap-0">
        <div className="lg:text-6xl md:text-4xl text-xl text-neutral-600 font-light">
          <h2 className=" leading-snug ">Everything you need.</h2>
          <h2 className=" leading-snug ">{`Nothing you don't.`}</h2>
        </div>
        <ViewCaseStudyButton className="font-light md:text-xl text-sm link-with-underline text-neutral-600" />
      </div>
    );
}