"use client";
import { navItems } from "@/settings/nav-items";
import { NavItem } from "./nav-item";
import { useState } from "react";
import LogoFull from "@/assets/logo/logo-full";
import { cn } from "@/utils/cn";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const [isActive, setIsActive] = useState("");
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="fixed hidden lg:block px-28 top-10 bg-transparent z-50 max-w-full inset-x-0 mx-auto space-x-4"
      >
        <div
          className={cn(
            "w-full h-28  flex items-center justify-between bg-neutral-950 px-5 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-40",
            className
          )}
        >
          <div className="text-white text-2xl font-bold">
            <Link href='/' className="size-fit cursor-pointer" >
              <LogoFull />
            </Link>
           
          </div>
          <div className="flex items-center space-x-4 2xl:w-7/12 lg:w-9/12 justify-between">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                isActive={isActive}
                setIsActive={setIsActive}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
