'use client'
import { TypeAnimation } from "react-type-animation";

type TextTypeAnimationProp = {
  content: any;
};

export const TextTypeAnimation = ({ content }: TextTypeAnimationProp) => {
  return (
    <TypeAnimation
      sequence={content}
      wrapper="span"
      speed={10}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
};
