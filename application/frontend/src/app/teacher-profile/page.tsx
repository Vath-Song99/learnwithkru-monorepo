/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Footer, Homepage, Navbar, TeachersProfile } from "@/components";
import React, { useState } from "react";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <div className="max-w-full  h-[200vh]">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <div className="w-full flex justify-center">
        <TeachersProfile />
      </div>
      <div className="w-full flex justify-center items-start bg-gray-900 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
