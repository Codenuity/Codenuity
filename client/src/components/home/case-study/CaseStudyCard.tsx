import { cn } from "@/utils/cn";
import Image from "next/image";

type CaseStudyCardProps = {
  className: string;
  content: any;
};

export const CaseStudyCard = ({
  className,
  content,
}: CaseStudyCardProps): JSX.Element => {
  return (
    <div
      className={cn(
        "w-full lg:min-h-[28rem] lg:h-[29rem] 2xl:min-h-[34rem] 2xl:h-[34rem] h-96 md:min-h-[29rem] text-neutral-600 flex flex-col items-center bg-neutral-200 rounded-2xl overflow-hidden",
        className
      )}
    >
      <div className="h-3/5 relative w-full">
        <Image
          src={content?.image}
          alt={content?.title}
          fill={true}
          style={{objectFit:"cover"}}
          className="rounded-xl"
        />
      </div>
      <div className="h-2/5 w-full flex lg:px-8 md:px-6 px-4 flex-col gap-3 justify-center 2xl:leading-normal items-start">
        <h1 className="2xl:text-2xl font-medium lg:text-xl text-neutral-900">
          {content?.title}
        </h1>
        <p className="2xl:text-lg text-sm md:text-base line-clamp-3 ">
          {content?.description}
        </p>
      </div>
    </div>
  );
};
