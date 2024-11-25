import DeliverLogo from "@/assets/animated/Deliver";
import DeliverMobile from "@/assets/animated/DeliverMobile";
import DesignMobile from "@/assets/animated/DesignMobile";
import DesignLogo from "@/assets/animated/Desing";
import DevelopIcon from "@/assets/animated/Develop";
import DevelopMobile from "@/assets/animated/DevelopMobile";
import { motion } from "motion/react";

const IconSection = () => {
  return (
    <div className="flex w-fit justify-between gap-5 md:justify-evenly md:gap-5 lg:w-4/5 lg:justify-between 2xl:w-3/5">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 90 }}
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: "linear",
          bounce: 0.5,
          power: 10,
          type: "spring",
        }}
      >
        <span className="hidden lg:block">
          <DesignLogo />
        </span>
        <span className="lg:hidden">
          <DesignMobile />
        </span>
      </motion.div>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "linear" }}
      >
        <span className="hidden lg:block">
          <DevelopIcon />
        </span>
        <span className="lg:hidden">
          <DevelopMobile />
        </span>
      </motion.div>
      <motion.div
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "linear" }}
      >
        <span className="hidden lg:block">
          <DeliverLogo />
        </span>
        <span className="lg:hidden">
          <DeliverMobile />
        </span>
      </motion.div>
    </div>
  );
};

export default IconSection;
