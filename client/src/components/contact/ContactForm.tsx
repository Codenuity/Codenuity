import React from "react";
import Input from "./Input";
import { contact } from "@/settings/contact";
import CustomSelect from "../common/CustomSelect";

const ContactForm = () => {
  return (
    <form className="flex flex-wrap w-full lg:gap-20 gap-5">
      <div className="flex lg:gap-24 gap-5 justify-between w-full flex-col md:flex-row">
        <Input
          className=""
          key={contact.formElements[0].name}
          placeholder={contact.formElements[0].placeholder}
          title={contact.formElements[0].title}
          name={contact.formElements[0].name}
          type={contact.formElements[0].type}
        />
        <Input
          className=""
          key={contact.formElements[1].name}
          placeholder={contact.formElements[1].placeholder}
          title={contact.formElements[1].title}
          name={contact.formElements[1].name}
          type={contact.formElements[1].type}
        />
      </div>
      <div className="flex flex-col md:flex-row  lg:gap-24 gap-5 justify-between w-full">
        <Input
          className=""
          key={contact.formElements[2].name}
          placeholder={contact.formElements[2].placeholder}
          title={contact.formElements[2].title}
          name={contact.formElements[2].name}
          type={contact.formElements[2].type}
        />
        <Input
          className=""
          key={contact.formElements[3].name}
          placeholder={contact.formElements[3].placeholder}
          title={contact.formElements[3].title}
          name={contact.formElements[3].name}
          type={contact.formElements[3].type}
        />
      </div>
      <div className="flex  flex-col w-full gap-2">
        <label htmlFor="subject">Subject</label>
        <div className="lg:gap-24 gap-5 flex-col md:flex-row md:justify-between justify-start w-full items-start md:items-stretch sm:flex-row hidden md:flex ">
          <Input
            className=""
            key={contact.formElements[4].name}
            placeholder={contact.formElements[4].placeholder}
            title={contact.formElements[4].title}
            name={contact.formElements[4].name}
            type={contact.formElements[4].type}
          />
          <Input
            className=""
            key={contact.formElements[5].name}
            placeholder={contact.formElements[5].placeholder}
            title={contact.formElements[5].title}
            name={contact.formElements[5].name}
            type={contact.formElements[5].type}
          />
          <Input
            className=""
            key={contact.formElements[6].name}
            placeholder={contact.formElements[6].placeholder}
            title={contact.formElements[6].title}
            name={contact.formElements[6].name}
            type={contact.formElements[6].type}
          />
        </div>
        <CustomSelect className="md:hidden"  />
      </div>
      <div className="w-full">
        <Input
          className=""
          key={contact.formElements[7].name}
          placeholder={contact.formElements[7].placeholder}
          title={contact.formElements[7].title}
          name={contact.formElements[7].name}
          type={contact.formElements[7].type}
        />
      </div>
      <div className="flex lg:gap-24 gap-5 lg:justify-between justify-start items-start  flex-col lg:flex-row w-full">
        <Input
          className=""
          key={contact.formElements[8].name}
          placeholder={contact.formElements[8].placeholder}
          title={contact.formElements[8].title}
          name={contact.formElements[8].name}
          type={contact.formElements[8].type}
        />
        <button className="px-5 py-2 bg-purple-600 rounded-md text-purple-50 w-fit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
