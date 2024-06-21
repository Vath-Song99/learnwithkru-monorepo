

import { ITeacher } from "@/@types/teacher.type";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
interface ProfileDropDownProps {
  children?: React.ReactNode;
  onChange?: (value?: string) => void;
  className?: string;
  icon?: React.ReactNode;
  teacher: ITeacher;
}

type LogoutResponse = {
  message: string;
  errors?: string[];
};

const DropdownTeacher: React.FC<ProfileDropDownProps> = ({
  className,
  icon,
  teacher,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  // const handleLogout = async (url: string): Promise<LogoutResponse> => {
  //   try {
  //     const response = await axios.get<LogoutResponse>(url, { withCredentials: true });

  //     if (response.data.errors && response.data.errors.length > 0) {
  //       const errorMessage = `Server error response: ${response.data.errors.join(', ')}`;
  //       throw new Error(errorMessage);
  //     }

  //     return response.data;
  //   } catch (error) {
  //     logError(error);
  //     throw error;
  //   }
  // };

  const logError = (error: unknown): void => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(
        "Axios error:",
        axiosError.response?.data || axiosError.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropDown}
        className="flex items-center justify-center w-[40px] h-[40px] bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        {icon}
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2  mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
            <Link
            href={`/profile-teacher/${teacher._id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleItemClick}
          >
            Profile
          </Link>
          <Link
            href={`/account-teacher/${teacher._id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropDown}
          >
         Account
          </Link>
          <Link
            href={`/settings/${teacher._id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropDown}
          >
            Settings
          </Link>
        
          {/* <Link
            href={`/settings/${teacher._id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropDown}
          >
            Profile update
          </Link> */}
          <div className="border-t border-gray-200"></div>
        </div>
      )}
    </div>
  );
};

export { DropdownTeacher };
