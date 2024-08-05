import Link from "next/link";

const CopyRight = () => {
  return (
    <div className="flex flex-col-reverse gap-3 text-center text-base font-light text-neutral-600 lg:flex-row lg:text-start">
      <p className="text-sm lg:text-base">
        Codenuity © 2024 All rights reserved.
      </p>
      <div className="flex items-center text-sm lg:text-base">
        <Link className="link-with-underline" href="/">
          Privacy Policy
        </Link>
        <p className="mx-2">|</p>
        <Link className="link-with-underline" href="/">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default CopyRight;
