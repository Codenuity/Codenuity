import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
  className: string;
};

export const Button = ({className}:ButtonProps) => {
    return (
        <button className={cn('',className)}>
        Button
        </button>
    );
}

export const ViewCaseStudyButton = ({className}:ButtonProps) => {
    return (
      <button className={cn("text-2xl", className)}>
        <Link
          href="/case-studies"
          className="flex font-light items-center gap-3 z-10 "
        >
          View our Case Studies <FaArrowRight />
        </Link>
      </button>
    );
}