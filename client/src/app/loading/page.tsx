"use client";
import DeliverLogo from "@/assets/animated/Deliver";
import DesignLogo from "@/assets/animated/Desing";
import DevelopIcon from "@/assets/animated/Develop";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  return (
    <main className="bg-neutral-950 h-screen text-white flex justify-center items-center w-screen overflow-hidden">
      <motion.div
        animate={{ scale: 35, filter: "blur(10px)" }}
        transition={{ duration: 3 ,delay:5 }}
        className="flex justify-around w-1/3 gap-20"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            bounce: 0.5,
            power: 10,
            type: "spring",
          }}
        >
          <DesignLogo />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <DevelopIcon />
        </motion.div>
        <motion.div
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <DeliverLogo />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Loading;
