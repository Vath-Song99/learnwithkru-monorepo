// components/ProfileDropDown.tsx

import React, { useState, useRef, useEffect } from "react";
interface ProfileDropDownProps {
  onChange: (value?: string) => void;
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
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropDown}
        className="flex items-center justify-center w-[36px] h-[36px] bg-purple-300 rounded-full focus:outline-none"
      >
        {/* Add icon here */}
        {icon}
      </button>
      {isOpen && (
        <div className="absolute -left-6 px-4 mt-2 bg-white border rounded-md shadow-lg z-10">
          <div className="py-1">
            <a
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-purple-200"
              onClick={handleItemClick}
            >
              Home
            </a>
            <a
              href={"user-setting"}
              className="block px-4 py-2 text-gray-800 hover:bg-purple-200"
              onClick={handleItemClick}
            >
              Settings
            </a>
            <a
              href={""}
              className="block px-4 py-2 text-gray-800 hover:bg-purple-200"
              onClick={handleItemClick}
            >
              Favorite
            </a>
            <div className="bg-gray-400 h-[1px] w-full px-10"></div>
            <a
              href={""}
              className="block mt-20 px-4 py-2 text-gray-800 hover:bg-purple-200"
              onClick={handleItemClick}
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export { ProfileDropDown };
