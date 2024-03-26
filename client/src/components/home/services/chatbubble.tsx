// bg-gradient-to-r from-blue-600 to-violet-900 -chat color

import { TextGenerateEffect } from "@/components/ui/text-generate";
import { useEffect } from "react";

type ChatBubbleProps = {
  message: any;
  sender: string;
};

export const ChatBubble = ({ message, sender }: ChatBubbleProps) => {
  useEffect(() => {
    console.log(message);
  }, [message, sender]);

  const bubbleStyle = sender === "bot" ? "justify-start" : "justify-end";

  return (
    <div className={`w-full flex ${bubbleStyle}`}>
      <div className="text-neutral-50 px-3 py-2 rounded-lg bg-neutral-400 border border-neutral-600 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-30 w-fit">
        {sender === "bot" ? (
          <TextGenerateEffect words={message.content} className="text-base" />
        ) : (
          <p>{message.content}</p>
        )}
      </div>
    </div>
  );
};
