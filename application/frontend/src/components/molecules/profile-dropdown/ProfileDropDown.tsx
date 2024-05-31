// components/ProfileDropDown.tsx

import axios, { AxiosError } from "axios";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
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
        className="flex items-center justify-center w-[30px] h-[30px] bg-purple-300 rounded-full focus:outline-none"
      >
        {/* Add icon here */}
        {icon}
      </button>
      {isOpen && (
        <div className="absolute -left-14 px-4 mt-2 bg-white border rounded-md shadow-lg z-10 w-[200px]">
          <div className="py-1 flex flex-col justify-center items-center">
            <Link
              href="/"
              className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-400 "
              onClick={handleItemClick}
            >
              Home
            </Link>
            <Link
              href={"user-setting"}
              className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-400  "
              onClick={handleItemClick}
            >
              Settings
            </Link>
            <Link
              href={""}
              className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-400  "
              onClick={handleItemClick}
            >
              Favorite
            </Link>
            <Link
              href={"/teacher-profile"}
              className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-400  "
              onClick={handleItemClick}
            >
              Profile
            </Link>
            <div className="bg-gray-400 h-[1px] w-full px-10"></div>
            <Link
              href={""}
              className="block mt-20 px-4 py-2  text-red-500  hover:bg-gray-300  "
              onClick={onLogoutClick}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { ProfileDropDown };
