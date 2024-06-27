"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { IUser } from "@/@types/user";

export default function DefaultLayout(
  { children }: { children: React.ReactNode },
  authState: { isAuth: boolean; user: IUser | null }
) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="w-full flex h-[80vh] justify-end overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="w-auto relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div className="w-full mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
