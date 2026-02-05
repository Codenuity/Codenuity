"use client";

import { useState } from "react";
import Input from "./Input";
import { contact } from "@/settings/contact";
import CustomSelect from "../common/CustomSelect";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
  agreeToTerms: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    projectType: "",
    budget: "",
    message: "",
    agreeToTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setErrorMessage("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage("Last name is required");
      return false;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage("Valid email is required");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Message is required");
      return false;
    }
    if (!formData.agreeToTerms) {
      setErrorMessage("You must agree to terms and conditions");
      return false;
    }
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    setErrorMessage("");
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/bot/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        projectType: "",
        budget: "",
        message: "",
        agreeToTerms: false,
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Failed to submit form. Please try again or contact us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-wrap gap-5 lg:gap-20"
    >
      {submitStatus === "success" && (
        <div className="w-full rounded-md bg-green-500 p-3 text-white">
          Thank you! We will get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="w-full rounded-md bg-red-500 p-3 text-white">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      <div className="flex w-full flex-col justify-between gap-4 md:flex-row xl:gap-8 2xl:gap-20">
        <Input
          className=""
          placeholder={contact.formElements[0].placeholder}
          title={contact.formElements[0].title}
          name={contact.formElements[0].name}
          type={contact.formElements[0].type}
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          className=""
          placeholder={contact.formElements[1].placeholder}
          title={contact.formElements[1].title}
          name={contact.formElements[1].name}
          type={contact.formElements[1].type}
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row xl:gap-8 2xl:gap-20">
        <Input
          className=""
          placeholder={contact.formElements[2].placeholder}
          title={contact.formElements[2].title}
          name={contact.formElements[2].name}
          type={contact.formElements[2].type}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          className=""
          placeholder={contact.formElements[3].placeholder}
          title={contact.formElements[3].title}
          name={contact.formElements[3].name}
          type={contact.formElements[3].type}
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="subject">Subject</label>
        <div className="hidden w-full flex-col gap-4 sm:flex-row md:flex md:items-stretch md:justify-between 2xl:gap-24">
          <Input
            className=""
            placeholder={contact.formElements[4].placeholder}
            title={contact.formElements[4].title}
            name={contact.formElements[4].name}
            type={contact.formElements[4].type}
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Input
            className=""
            placeholder={contact.formElements[5].placeholder}
            title={contact.formElements[5].title}
            name={contact.formElements[5].name}
            type={contact.formElements[5].type}
            value={formData.projectType}
            onChange={handleChange}
          />
          <Input
            className=""
            placeholder={contact.formElements[6].placeholder}
            title={contact.formElements[6].title}
            name={contact.formElements[6].name}
            type={contact.formElements[6].type}
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <CustomSelect
          className="md:hidden"
          value={formData.projectType}
          onValueChange={handleSelectChange}
        />
      </div>
      <div className="w-full">
        <label htmlFor="message" className="block mb-2">
          {contact.formElements[7].title}
        </label>
        <textarea
          id="message"
          name={contact.formElements[7].name}
          placeholder={contact.formElements[7].placeholder}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded border border-neutral-600 bg-neutral-900 px-3 py-2 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          rows={5}
          required
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-5 lg:flex-row lg:justify-between lg:gap-24">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 cursor-pointer"
            required
          />
          <label htmlFor="agreeToTerms" className="cursor-pointer text-sm">
            I agree to terms and conditions
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-fit rounded-md bg-purple-600 px-5 py-2 text-purple-50 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
