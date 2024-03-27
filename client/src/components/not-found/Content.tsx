import Link from "next/link";
import CtaButton from "../common/CtaButton";

const NotFoundContent = () => {
  return (
    <div className="w-full h-full font-Inter text-slate-50 flex flex-col lg:flex-row gap-10 justify-center items-start">
      <h1 className="lg:text-6xl md:text-4xl text-2xl md:leading-relaxed leading-relaxed lg:leading-relaxed font-thin lg:w-3/4 lg:-mt-10 ">
        Updates in progress. This page will reopen soon.
        
        <br className="hidden md:block lg:hidden" />
         Sorry for the
        inconvenience.
      </h1>
      <div className="flex flex-col lg:flex-grow w-full lg:w-auto gap-10 justify-start items-center">
        <CtaButton className="w-full" />
        <Link className="text-lg link-with-underline" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundContent;
