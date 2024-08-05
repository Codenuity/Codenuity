import Logo from "@/assets/logo/logo";
import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className="fixed top-10 z-50 mx-10 w-fit text-white md:px-20 lg:hidden">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};

export default MobileNavbar;
