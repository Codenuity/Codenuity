import { motion } from "motion/react";
import { BsStars } from "react-icons/bs";

const AiButton = () => {
  const sendMessageToBot = () => {
    // Your logic to send a message to the bot
  };
  return (
    <motion.button
      initial={{}}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{ duration: 0.3 }}
      onClick={sendMessageToBot}
      className="flex h-fit w-fit items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-neutral-500 hover:text-neutral-50"
    >
      <BsStars /> <span className="hidden md:block">Generate</span>
    </motion.button>
  );
};

export default AiButton;
