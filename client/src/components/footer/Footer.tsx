import React from "react";
import Address from "./Address";
import RightSection from "./RightSection";
import "./footer.css";
import CopyRight from "./CopyRight";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-50 text-neutral-950 mt-40 py-20 2xl:px-52 xl:px-40 px-10 md:px-20 flex flex-col lg:justify-between gap-0">
      <div className="justify-between hidden lg:flex">
        <Address />
        <RightSection />
      </div>
      <div className="w-full flex lg:flex-row gap-y-5 flex-col-reverse justify-between items-center lg:mt-14">
        <CopyRight />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
