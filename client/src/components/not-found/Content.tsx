import Link from "next/link";
import CtaButton from "../common/CtaButton";

const NotFoundContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-10 font-Inter text-slate-50 lg:flex-row">
      <h1 className="text-2xl font-thin leading-relaxed md:text-4xl md:leading-relaxed lg:-mt-10 lg:w-4/6 lg:text-6xl lg:leading-relaxed">
        Hey there! Just a heads up, the page is being updated right now. It'll
        be back up and running soon. Sorry for the wait!
      </h1>
      <div className="flex w-full flex-col items-center justify-start gap-10 lg:w-auto lg:flex-grow">
        <CtaButton className="w-full" />
        <Link className="link-with-underline text-lg" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundContent;
