import { cn } from "@/utils/cn";
import Image from "next/image";
import { AiSectionCard } from "./ai";

type SectionCardProps = {
  className: string;
  id: string;
  content: any;
};

export const SectionCard = ({ className, id, content }: SectionCardProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-between gap-5 rounded-2xl border border-neutral-900 bg-neutral-600 bg-opacity-20 p-5 backdrop-blur-lg backdrop-filter",
        className
      )}
    >
      <div className="relative h-4/6 w-full md:h-3/4">
        <Image
          src={content.image}
          alt={content.title}
          className="rounded-2xl object-cover object-center"
          fill={true}
        />
      </div>
      <div className="mt-2 flex w-full flex-col gap-2">
        <h3 className="text-lg font-medium leading-snug">{content.title}</h3>
        <p className="text-xs leading-relaxed text-neutral-500 md:text-sm xl:w-4/6">
          {content.description}
        </p>
      </div>
    </div>
  );
};
