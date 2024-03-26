import Link from "next/link";
import React from "react";

const Address = () => {
  return (
    <div className="flex flex-col lg:gap-5 gap-2">
      <h1 className="lg:text-3xl text-xl bg-clip-text bg-gradient-to-b from-neutral-500  to-neutral-400  text-transparent font-normal  ">
        Codenuity Solutions Pvt Ltd
      </h1>
      <address className="flex flex-col lg:gap-5 gap-2 not-italic">
        <p className="bg-clip-text bg-gradient-to-b from-neutral-500  to-neutral-400  text-transparent text-sm lg:text-base">
          Contact Number : +91 70122 83991
        </p>
        <Link
          href="mailto:info@codenuity.com"
          className="bg-clip-text bg-gradient-to-b from-neutral-500  to-neutral-400  text-transparent text-sm lg:text-base"
        >
          Email : info@codenuity.com
        </Link>
      </address>
    </div>
  );
};

export default Address;
