"use client";
import { countries } from "@/settings/countries";
import { cn } from "@/utils/cn";
import { useState } from "react";

type InputProp = {
  className?: string;
  placeholder?: string;
  title?: string;
  name?: string;
  type?: string;
};

const Input = ({ className, placeholder, title, name, type }: InputProp) => {
  const [code, setCode] = useState("+91");
  const [number, setNumber] = useState(code);

  const addCode = (dial_code: string, number: string) => {
    console.log(dial_code, number);
    const cleanedNumber = number.replace(dial_code, "")
    console.log(cleanedNumber);
    return `${dial_code} ${cleanedNumber.trim()}`;
  };

  const handleNumberChange = (e: any, dial_code: any) => {
    const inputValue = e.target.value;
    setCode(dial_code);
    setNumber(addCode(dial_code, inputValue));
  };

  return (
    <>
      {type === "checkbox" && (
        <div className={cn("flex gap-2 items-center  bg-black", className)}>
          <label
            htmlFor={name}
            className="container flex items-center cursor-pointer text-sm"
          >
            <input
              className=""
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
            />
            <div className="checkmark"></div>
            <span className="text-neutral-300">{title}</span>
          </label>
        </div>
      )}
      {type === "text" || type === "email" ? (
        <div className="flex flex-col gap-2  lg:w-[26rem] w-full">
          <label htmlFor={name}>{title}</label>
          <div
            className={cn("bg-neutral-800 w-full rounded-lg p-1", className)}
          >
            <input
              className="bg-neutral-800 px-5 py-2 w-full rounded-md caret-neutral-50 text-neutral-200 focus:outline-none border border-neutral-800 focus:border-neutral-700"
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
            />
          </div>
        </div>
      ) : null}

      {type === "number" && (
        <div className="lg:w-[26rem] w-full">
          <label className="text-neutral-50 text-base">{title}</label>
          <div className="relative mt-2 lg:max-w-[26rem] max-w-full text-gray-500 bg-neutral-800 rounded-lg p-1">
            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center  border-r pr-2">
              <select
                className="text-base outline-none h-full bg-transparent"
                onChange={(e) => setCode(e.target.value)}
                defaultValue={code}
              >
                {countries.map((country) => {
                  return (
                    <option key={country.code} value={country.dial_code}>
                      {country.code}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="text"
              placeholder=""
              value={number}
              onChange={(e) => {
                handleNumberChange(e, code);
              }}
              className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none  shadow-base rounded-md caret-neutral-50 text-neutral-200 focus:outline-none border border-neutral-800 focus:border-neutral-700"
            />
          </div>
        </div>
      )}

      {type === "textarea" && (
        <>
          <div className="flex flex-col gap-2">
            <span>{title}</span>
            <textarea
              cols={4}
              rows={6}
              maxLength={1000}
              minLength={5}
              name={name}
              placeholder={placeholder}
              className="bg-neutral-800 px-5 py-2 w-full rounded-md caret-neutral-50 text-neutral-200 focus:outline-none border border-neutral-800 focus:border-neutral-700"
              id={name}
            ></textarea>
          </div>
        </>
      )}
    </>
  );
};

export default Input;
