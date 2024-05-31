// components/ProfileDropDown.tsx

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
  <>  {/* <Link
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
    onClick={handleItemClick}
  >
    Logout
  </Link> */}</>
  // return (
  //   <>
  //     <div className={`relative inline-block ${className}`} ref={dropdownRef}>
  //       <button
  //         onClick={toggleDropDown}
  //         className="flex items-center justify-center w-[30px] h-[30px] bg-purple-300 rounded-full focus:outline-none"
  //       >
  //         {/* Add icon here */}
  //         {icon}
  //       </button>
  //       {isOpen && (
  //         <div className="absolute -left-14 px-4 mt-2 border rounded-md shadow-lg z-10 w-[200px]">
  //           <div className="py-1 flex flex-col justify-center items-center">
  //             <div>
  //               <aside className={`fixed z-20 inset-y-9 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 w-64`}>
  //                 <div className="bg-cover bg-center p-4" style={{ backgroundImage: '' }}>
  //                   <div className="flex items-center">
  //                     <div className="avatar w-12 h-12">
  //                       {/* Uncomment the next line if you have the gravatar image URL */}
  //                       <Image src="/Logos/KruLogo.png" alt="Avatar" width={50} height={50} className="rounded" />
  //                     </div>
  //                     <div className="ml-4">
  //                       <span className="block text-white font-bold">Learn With Kru</span>
  //                       <span className="block text-white text-sm">2024©</span>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <ul className="mt-4 text-white">
  //                   <li><a href="#" className="flex items-center p-2 hover:bg-gray-700"><span className="mif-home mr-2"></span>Home</a></li>
  //                   <li><a href="#" className="flex items-center p-2 hover:bg-gray-700"><span className="mif-books mr-2"></span>Guide</a></li>
  //                   <li><a href="#" className="flex items-center p-2 hover:bg-gray-700"><span className="mif-files-empty mr-2"></span>Examples</a></li>
  //                   <li className="border-t border-gray-700 my-2"></li>
  //                   <li><a href="#" className="flex items-center p-2 hover:bg-gray-700"><span className="mif-images mr-2"></span>Icons</a></li>
  //                 </ul>
  //               </aside>

  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>





  //   </>

  // );
  // };
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
