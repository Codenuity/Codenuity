import { cn } from "@/utils/cn";

type ClientSectionProps = {
  className: string;
};

export const ClientSection = ({
  className,
}: ClientSectionProps): JSX.Element => {
  return <div className={cn("h-96  w-full", className)}></div>;
};
