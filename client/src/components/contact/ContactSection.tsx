import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="min-h-screen md:min-h-fit w-full h-fit flex flex-col lg:flex-row lg:justify-center lg:items-center mt-24">
      <div className="md:w-1/2 w-full">
        <h1 className="lg:text-7xl text-3xl font-light text-animation ">
          Get in Touch <br className="sm:hidden lg:block" />
          with Innovation
        </h1>
      </div>
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactSection;
