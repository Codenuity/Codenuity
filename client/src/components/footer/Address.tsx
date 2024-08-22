import Link from "next/link";
import React from "react";

const Address = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-5">
      <h1 className="bg-gradient-to-b from-neutral-500 to-neutral-400 bg-clip-text text-xl font-normal text-transparent lg:text-3xl">
        Codenuity Solutions Pvt Ltd
      </h1>
      <address className="flex flex-col gap-2 not-italic lg:gap-5">
        <Link
          href="tel:+91 90482 79650"
          className="bg-gradient-to-b from-neutral-500 to-neutral-400 bg-clip-text text-sm text-transparent lg:text-base"
        >
          Contact Number : +91 90482 79650
        </Link>
        <Link
          href="mailto:info@codenuity.com"
          className="bg-gradient-to-b from-neutral-500 to-neutral-400 bg-clip-text text-sm text-transparent lg:text-base"
        >
          Email : admin@codenuity.com
        </Link>
      </address>
    </div>
  );
};

export default Address;
