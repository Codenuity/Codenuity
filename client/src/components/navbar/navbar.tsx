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
} from "motion/react";
import Link from "next/link";

type NavbarProps = {
  className?: string;
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
        className="fixed inset-x-0 top-6 z-50 mx-auto hidden max-w-full space-x-4 bg-transparent px-14 lg:block xl:px-28 2xl:top-10"
      >
        <div
          className={cn(
            "flex h-28 w-full items-center justify-between rounded-xl bg-neutral-950 bg-opacity-40 px-5 backdrop-blur-lg backdrop-filter",
            className
          )}
        >
          <div className="text-2xl font-bold text-white">
            <Link href="/" className="size-fit cursor-pointer">
              <LogoFull />
            </Link>
          </div>
          <div className="flex items-center justify-between space-x-2 lg:w-8/12 xl:w-7/12 2xl:w-7/12 2xl:space-x-4">
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
