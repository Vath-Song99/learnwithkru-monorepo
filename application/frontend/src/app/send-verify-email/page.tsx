"use client";
import { VerifyEmail } from "@/components/organisms/auth/VerifyEmail";
import { UserProvider } from "@/context/UserContext";
import React from "react";

const Page = () => {
 
  return (
    <UserProvider>
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
      </div>
      <VerifyEmail/>
      <div className="w-full flex justify-center items-start bg-gray-900"></div>
    </div>
    </UserProvider>
  );
};

export default Page;
