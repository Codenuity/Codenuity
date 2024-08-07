import { content } from "@/settings/home";
import { cn } from "@/utils/cn";
// import { ChatBubble } from "./chatbubble";
import AiButton from "./AiButton";

type AiSectionCardProps = {
  className: string;
};

export const AiSectionCard = ({
  className,
}: AiSectionCardProps): JSX.Element => {
  // const [messages, setMessages] = useState<
  //   { id: string; content: string | (() => void); sender: string }[]
  // >([]);

  // const [sendMessage, setSendMessage] = useState<string>("");
  // const [update, setUpdate] = useState<boolean>(false);
  // const socket = React.useMemo(() => new WebSocket("ws://localhost:5000"), []);

  // React.useEffect(() => {
  //   socket.onmessage = (event) => {
  //     const newMessage = {
  //       id: `sdn`,
  //       content: event.data,
  //       sender: "bot",
  //     };
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   };
  // }, []);

  // const sendMessageToBot = () => {
  //   if (sendMessage === "") return;

  //   const newMessage = {
  //     id: `sdn`,
  //     content: sendMessage,
  //     sender: "user",
  //   };
  //   setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   // socket.send(sendMessage);
  //   setSendMessage("");
  //   setUpdate((prevUpdate) => !prevUpdate);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSendMessage(e.target.value);
  // };

  return (
    <div
      className={cn(
        "flex h-96 w-full flex-col items-center justify-between gap-5 rounded-2xl border border-neutral-900 bg-neutral-600 bg-opacity-20 p-5 backdrop-blur-lg backdrop-filter lg:h-full",
        className
      )}
    >
      <div className="custom-scrollbar relative flex h-2/4 w-full flex-col items-center justify-center gap-5 overflow-y-auto px-5 text-sm md:text-base">
        {/* {messages.length > 0 ? (
          messages.map((msg, index) => (
            <ChatBubble key={index} message={msg} sender={msg?.sender} />
          ))
        ) : ( */}
        <h1>How Can I help you today?</h1>
        {/* )} */}
      </div>
      <div className="flex h-16 w-full items-center justify-center rounded-xl bg-neutral-800 px-5 py-2 pr-3 font-light text-neutral-100 backdrop-blur-lg backdrop-filter">
        <input
          type="text"
          className="h-full w-full bg-transparent tracking-wide placeholder:text-transparent focus:border-none focus:outline-none md:placeholder:text-gray-400"
          placeholder="How will AI shapes future?"
          // value={sendMessage}
          // onChange={handleChange}
          disabled
        />
        <AiButton />
      </div>
      <div className="flex w-full flex-col gap-2 md:mt-5">
        <h3 className="text-lg font-medium leading-snug">
          {content.services.ai.title}
        </h3>
        <p className="text-xs leading-relaxed text-neutral-500 md:text-sm xl:w-4/6">
          {content.services.ai.description}
        </p>
      </div>
    </div>
  );
};
