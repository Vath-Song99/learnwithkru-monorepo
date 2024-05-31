// components/ProfileDropDown.tsx

import axios, { AxiosError } from "axios";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { image, toggle } from "@nextui-org/react";
interface ProfileDropDownProps {
  children?: React.ReactNode;
  onChange?: (value?: string) => void;
  className?: string;
  icon?: React.ReactNode;

}

const ProfileDropDown: React.FC<ProfileDropDownProps> = ({
  onChange,
  className,
  icon,
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

  const handleLogout = async (url: string) => {
    try {
      const response = await axios.get(url, { withCredentials: true });

      if (response.data.errors) {
        console.error(`Server error response: ${response.data.errors}`);
        throw new Error(response.data.errors);
      }

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error: ", error.response?.data || error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
      throw error;
    }
  };

  const onLogoutClick = async () => {
    try {
      const url = 'http://localhost:3000/v1/auth/logout';
      const response = await handleLogout(url);
      console.log("Message response: ", response.message);
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error: ", error.response?.data || error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
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

          <div className=""></div>
          <Link
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleItemClick}
          >
            Home
          </Link>
          <Link
            href="/user-setting"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropDown}
          >
            Settings
          </Link>
          <Link
            href="/favorite"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleItemClick}
          >
            Favorite
          </Link>
          <Link
            href="/user-setting"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropDown}
          >
            Profile
          </Link>
          <div className="border-t border-gray-200"></div>
          <Link
            href="/logout"
            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={toggleDropDown}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};


export { ProfileDropDown };
