"use client";
import { buttons } from "@/settings/button-section";
import { SectionButton } from "./Button";
import { useState } from "react";

export const ButtonSection = () => {

    const [selected, setSelected] = useState<string[]>([]);

    const handleSelected = (title: string) => {
        if (selected.includes(title)) {
          setSelected(selected.filter((item) => item !== title));
        } else {
          setSelected([...selected, title]);
        }
    }

    return (
      <div className="flex flex-wrap gap-4">
        {buttons.map((title, index) => (
          <SectionButton
            key={index}
            selected={selected}
            setSelected={handleSelected}
            title={title}
          />
        ))}
      </div>
    );
}