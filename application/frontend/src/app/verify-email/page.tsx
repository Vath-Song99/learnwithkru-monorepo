"use client";
import { Navbar } from "@/components";
import { VerifyEmail } from "@/components/organisms/auth/VerifyEmail";
import { UserProvider } from "@/context/UserContext";
import React, { useState } from "react";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <UserProvider>
      <div className="max-w-full grid">
        <div className="w-full flex justify-center items-center">
          <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} authState={{
            isAuth: false,
            user: undefined
          }} />
        </div>
        <VerifyEmail />
        <div className="w-full flex justify-center items-start bg-gray-900"></div>
      </div>
    </UserProvider>
  );
};

export default Page;
