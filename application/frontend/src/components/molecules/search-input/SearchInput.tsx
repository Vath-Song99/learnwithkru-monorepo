"use client"
import React, { ChangeEvent, ReactElement, useState } from "react";
import { InputForm, Typography } from "@/components/atoms";

const SearchInput = ({ className, setSearch }: { className?: string, setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
  //catch value 

  const [value, setValue] = useState("")
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (setSearch) { // Check if setSearch is defined before calling it
      setSearch(e.target.value);
    }
  };
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full flex justify-center items-center border shadow-sm py-1  gap-5 ">
        <div className="lg:w-[80%] w-[80%] flex items-center justify-between ">
          <div className="flex items-center md:gap-4 gap-">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 md:h-6 w-5 text-[#455445]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <InputForm
              type="text"
              borderColor="none"
              className="outline-none border-none text-xs md:text-sm"
              placeholder="Searching ..."
              value={value}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <div className="lg:w-[80%] w-[80%] flex items-center justify-between ">
          <div className="flex items-center  md:gap-8 gap-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 md:h-6 w-5 text-[#455445]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <Typography
              className="text-xs"
              fontSize="sm"
              colorscheme="secondary"
              variant="semibold"
              align="justify"
            >
              Choose Option
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SearchInput };
