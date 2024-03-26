import Link from "next/link";
import { GoHorizontalRule } from "react-icons/go";


const CopyRight = () => {
  return (
    <div className="text-neutral-600 flex gap-3 font-light text-base text-center lg:text-start flex-col-reverse lg:flex-row
    ">
      <p className="text-sm lg:text-base">Codenuity © 2024 All rights reserved.</p>
      <p className="flex items-center text-sm lg:text-base">
        <Link className="link-with-underline" href="/">
          Privacy Policy
        </Link>{" "}
        <span className="rotate-90">
          <GoHorizontalRule size={20} />
        </span>{" "}
        <Link className="link-with-underline" href="/">
          Terms & Conditions
        </Link>
      </p>
    </div>
  );
};

export default CopyRight;
