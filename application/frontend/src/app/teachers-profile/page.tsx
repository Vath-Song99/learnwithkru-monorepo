"use client";
import { Navbar, TeachersProfile } from "@/components";

import React, { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <div className="max-w-full">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
        {/* <Modal/> */}
      </div>
      <TeachersProfile />
    </div>
  );
};

export default page;
