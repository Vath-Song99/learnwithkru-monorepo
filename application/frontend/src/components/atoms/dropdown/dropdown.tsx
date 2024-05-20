"use client";
import Link from "next/link";
import React, { Children, useState } from "react";
import Image from "next/image";
import { Button } from "../button";
import { Values } from "aws-cdk-lib/aws-cloudwatch";

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
  buttonContent: React.ReactNode;
}
interface ShowDropProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  align?: string;
}

interface LinkDropdownProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
}

interface LinkDropdownPageProps {
  itemDropdown: string;
  className?: string;
  role?: string;
  href?: string;
  id?: string;
}
interface SelectDropdownnProps {
  options?: string[];
  children?: React.ReactNode;
  className?: string;
}
const SelectDropdownnProps: React.FC<SelectDropdownnProps> = ({
  options,
  className
}) => {
  return (
    <select name="" id="" className={`${className}`}>
      {options?.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  className,
  buttonContent,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown  relative inline-block ${className || ""}`}
    >

      <button
        className='inline-flex w-full justify-between items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-normal shadow-sm   border  hover:bg-gray-50" id="menu-button" aria-expanded="true'
        onClick={toggleDropdown}
      >

        {buttonContent}
        <svg
          className={`-mr-1 h-5 w-5 text-gray-400 transition-all duration-300 transform ${isOpen ? "rotate-180" : ""
            }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={`${className}`}>
          <SelectDropdownnProps >
            <option value="">
              {children}
            </option>
          </SelectDropdownnProps>
        </div>
      )}
    </div>
  );
};

const ShowDropdown: React.FC<ShowDropProps> = ({
  children,
  className,
  role,
  align,
}) => {
  return (
    <div
      className={`absolute ${align} right-0 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${className}`}
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      role={`${role}`}
    >

      {children}
    </div>
  );
};

const LinkDropdown: React.FC<LinkDropdownProps> = ({
  children,
  className,
  role,
}) => {
  return (
    <div className={`hover:bg-gray-50 hover:rounded-md ${className}`} role={`${role}`}>
      {children}
    </div>
  );
};
// dropdown
const LinkDropdownPage: React.FC<LinkDropdownPageProps> = ({
  itemDropdown,
  className,
  href,
  id,
  role,
}) => {
  return (
    <Link
      className={`${className}`}
      href={`${href}`}
      id={`${id}`}
      role={`${role}`}
    >
      {itemDropdown}
    </Link>
  );
};

export { Dropdown, ShowDropdown, LinkDropdown, LinkDropdownPage, SelectDropdownnProps };
