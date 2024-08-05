import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="mt-24 flex h-fit min-h-screen w-full flex-col md:min-h-fit lg:flex-row lg:items-center lg:justify-center">
      <div className="w-full lg:w-1/2">
        <h1 className="text-animation text-3xl font-light lg:text-6xl 2xl:text-7xl">
          Get in Touch <br className="sm:hidden lg:block" />
          with Innovation
        </h1>
      </div>
      <div className="mt-10 w-full lg:mt-0 lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
