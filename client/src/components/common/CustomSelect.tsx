import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";
import { contact } from "@/settings/contact";

type CustomSelectProps = {
  className?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const CustomSelect = ({ className }: CustomSelectProps) => {
  return (
    <Select>
      <SelectTrigger
        className={cn(
          "w-full bg-neutral-800 text-base border-none outline-none focus:ring-0 ring-0 focus:outline-none h-12",
          className
        )}
      >
        <SelectValue placeholder="Select a value" />
      </SelectTrigger>
      <SelectContent className="w-full bg-neutral-900 border-none text-base text-neutral-100 outline-none">
        {contact.formElements
          ?.filter((option) => option.type === "checkbox").slice(0,-1)
          .map((option) => (
            <SelectItem key={option.name} value={option.title}>
              {option.title}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
