import { content } from "@/settings/home";
import { cn } from "@/utils/cn";
import React from "react";
import { ChatBubble } from "./chatbubble";
import AiButton from "./AiButton";


type AiSectionCardProps = {
  className: string;
};

export const AiSectionCard = ({
  className,
}: AiSectionCardProps): JSX.Element => {
  const [messages, setMessages] = React.useState<
    { id: string; content: string | (() => void); sender: string }[]
  >([]);

  const [sendMessage, setSendMessage] = React.useState<string>("");
  const [update, setUpdate] = React.useState<boolean>(false);
  // const socket = React.useMemo(() => new WebSocket("ws://localhost:5000"), []);

  React.useEffect(() => {
    // socket.onmessage = (event) => {
    //   const newMessage = {
    //     id: `sdn`,
    //     content: event.data,
    //     sender: "bot",
    //   };
    //   setMessages((prevMessages) => [...prevMessages, newMessage]);
    // };
  }, []);

  const sendMessageToBot = () => {
    if (sendMessage === "") return;

    const newMessage = {
      id: `sdn`,
      content: sendMessage,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // socket.send(sendMessage);
    setSendMessage("");
    setUpdate((prevUpdate) => !prevUpdate);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendMessage(e.target.value);
  };

  return (
    <div
      className={cn(
        "w-full bg-neutral-600  backdrop-filter backdrop-blur-lg lg:h-full h-96 bg-opacity-20 p-5 border border-neutral-900 rounded-2xl gap-5 flex flex-col justify-between items-center",
        className
      )}
    >
      <div className="w-full h-2/4 overflow-y-auto relative flex text-sm md:text-base flex-col gap-5 justify-center items-center custom-scrollbar px-5">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <ChatBubble key={index} message={msg} sender={msg?.sender} />
          ))
        ) : (
          <h1>How Can I help you today?</h1>
        )}
      </div>
      <div className="w-full flex text-neutral-100 font-light bg-neutral-800 backdrop-filter backdrop-blur-lg h-16 rounded-xl px-5 pr-3 py-2 justify-center items-center">
        <input
          type="text"
          className="w-full bg-transparent h-full tracking-wide focus:outline-none focus:border-none placeholder:text-transparent md:placeholder:text-gray-400"
          placeholder="How will AI shapes future?"
          value={sendMessage}
          onChange={handleChange}
          disabled
        />
        <AiButton />
      </div>
      <div className="flex flex-col gap-2 w-full h-2/4 md:mt-5 ">
        <h3 className="text-lg font-medium leading-snug">
          {content.services.ai.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          <span>{content.services.ai.description}</span>
        </p>
      </div>
    </div>
  );
};
