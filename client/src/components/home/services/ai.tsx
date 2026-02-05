"use client";

import { content } from "@/settings/home";
import { cn } from "@/utils/cn";
import { useState, useEffect, useRef } from "react";
import { connect, sendMessage, isConnected } from "@/apis/chatbot";
import { ChatBubble } from "./chatbubble";
import AiButton from "./AiButton";

type AiSectionCardProps = {
  className: string;
};

export const AiSectionCard = ({
  className,
}: AiSectionCardProps): JSX.Element => {
  const [messages, setMessages] = useState<
    { id: string; content: string; sender: string }[]
  >([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect to WebSocket on component mount
  useEffect(() => {
    const setupWebSocket = async () => {
      try {
        await connect((message) => {
          try {
            // Parse JSON response from server
            const parsedMessage = typeof message === 'string' ? JSON.parse(message) : message;
            const botResponse = parsedMessage.message || parsedMessage;
            
            const newMessage = {
              id: `msg-${Date.now()}`,
              content: botResponse,
              sender: "bot",
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setIsLoading(false);
          } catch (error) {
            // If JSON parsing fails, use message as-is
            const newMessage = {
              id: `msg-${Date.now()}`,
              content: message,
              sender: "bot",
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.error("Failed to connect to chatbot:", error);
      }
    };

    setupWebSocket();
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      id: `msg-${Date.now()}`,
      content: inputMessage,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    // Send to bot
    if (isConnected()) {
      setIsLoading(true);
      try {
        await sendMessage(inputMessage);
      } catch (error) {
        console.error("Failed to send message:", error);
        setIsLoading(false);
        const errorMessage = {
          id: `msg-${Date.now()}`,
          content: "Sorry, I encountered an error. Please try again.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } else {
      const connectionError = {
        id: `msg-${Date.now()}`,
        content: "Unable to connect to chatbot. Please refresh the page.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, connectionError]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={cn(
        "flex h-96 w-full flex-col items-center justify-between gap-5 rounded-2xl border border-neutral-900 bg-neutral-600 bg-opacity-20 p-5 backdrop-blur-lg backdrop-filter lg:h-full",
        className
      )}
    >
      <div className="custom-scrollbar relative flex h-2/4 w-full flex-col items-center justify-start gap-5 overflow-y-auto px-5 text-sm md:text-base">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} sender={msg.sender} />
          ))
        ) : (
          <h1 className="text-neutral-400">How Can I help you today?</h1>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex h-16 w-full items-center justify-center rounded-xl bg-neutral-800 px-5 py-2 pr-3 font-light text-neutral-100 backdrop-blur-lg backdrop-filter">
        <input
          type="text"
          className="h-full w-full bg-transparent tracking-wide placeholder:text-gray-500 focus:border-none focus:outline-none"
          placeholder="Ask me anything..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="ml-2 px-4 py-2 rounded-lg bg-neutral-900 text-neutral-500 hover:text-neutral-50 disabled:opacity-50"
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default AiSectionCard;
