import Input from "./Input";
import { contact } from "@/settings/contact";
import CustomSelect from "../common/CustomSelect";

const ContactForm = () => {
  return (
    <form className="flex w-full flex-wrap gap-5 lg:gap-20">
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row xl:gap-8 2xl:gap-20">
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
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row xl:gap-8 2xl:gap-20">
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
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="subject">Subject</label>
        <div className="hidden w-full flex-col gap-4 sm:flex-row md:flex md:items-stretch md:justify-between 2xl:gap-24">
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
        <CustomSelect className="md:hidden" />
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
      <div className="flex w-full flex-col items-start justify-start gap-5 lg:flex-row lg:justify-between lg:gap-24">
        <Input
          className=""
          key={contact.formElements[8].name}
          placeholder={contact.formElements[8].placeholder}
          title={contact.formElements[8].title}
          name={contact.formElements[8].name}
          type={contact.formElements[8].type}
        />
        <button className="w-fit rounded-md bg-purple-600 px-5 py-2 text-purple-50">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
