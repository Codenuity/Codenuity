import { cn } from "@/utils/cn";
import Image from "next/image";
import { AiSectionCard } from "./ai";


type SectionCardProps = {
  className: string;
  id: string;
  content: any;
};

export const SectionCard = ({ className, id , content }: SectionCardProps) => {
  return (
    <div
      className={cn(
        "w-full bg-neutral-600  backdrop-filter backdrop-blur-lg h-full bg-opacity-20 p-5 border border-neutral-900 rounded-2xl gap-5 flex flex-col justify-between items-center",
        className
      )}
    >
      <div className="w-full md:h-3/4 h-4/6 relative">
          <Image
            src={content.image}
            alt={content.title}
            className="rounded-2xl"
            fill={true}
          />
      </div>
      <div className="flex flex-col gap-2 md:h-1/4 h-2/6 w-full mt-3 ">
        <h3 className="text-lg font-medium leading-snug">
          {content.title} 
        </h3>
        <p className="md:text-sm text-xs text-neutral-500 leading-relaxed">
          {content.description}
        </p>
      </div>
    </div>
  );
};
