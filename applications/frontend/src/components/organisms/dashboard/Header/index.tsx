import { IUser } from "@/@types/user";
import React from "react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  authState: {
    isAuth: boolean;
    user: IUser | null;
  };
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow">
      <div className="flex items-center justify-between p-4">
        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="text-xl text-black font-semibold">My Application</div>
      </div>

    </header>
  );
};

export default Header;
