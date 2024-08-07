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
    const cleanedNumber = number.replace(dial_code, "");
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
        <div className={cn("flex items-center gap-2 bg-black", className)}>
          <label
            htmlFor={name}
            className="container flex cursor-pointer items-center text-sm"
          >
            <input
              className=""
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
            />
            <div className="checkmark"></div>
            <span className="text-nowrap text-neutral-300">{title}</span>
          </label>
        </div>
      )}
      {type === "text" || type === "email" ? (
        <div className="flex w-full flex-col gap-2 lg:w-[26rem]">
          <label htmlFor={name}>{title}</label>
          <div
            className={cn("w-full rounded-lg bg-neutral-800 p-1", className)}
          >
            <input
              className="w-full rounded-md border border-neutral-800 bg-neutral-800 px-5 py-2 text-neutral-200 caret-neutral-50 focus:border-neutral-700 focus:outline-none"
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
            />
          </div>
        </div>
      ) : null}

      {type === "number" && (
        <div className="w-full lg:w-[26rem]">
          <label className="text-base text-neutral-50">{title}</label>
          <div className="relative mt-2 max-w-full rounded-lg bg-neutral-800 p-1 text-gray-500 lg:max-w-[26rem]">
            <div className="absolute inset-y-0 left-3 my-auto flex h-6 items-center border-r pr-2">
              <select
                className="h-full bg-transparent text-base outline-none"
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
              className="shadow-base w-full appearance-none rounded-md border border-neutral-800 bg-transparent py-2 pl-[4.5rem] pr-3 text-neutral-200 caret-neutral-50 outline-none focus:border-neutral-700 focus:outline-none"
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
              className="w-full rounded-md border border-neutral-800 bg-neutral-800 px-5 py-2 text-neutral-200 caret-neutral-50 focus:border-neutral-700 focus:outline-none"
              id={name}
            ></textarea>
          </div>
        </>
      )}
    </>
  );
};

export default Input;
