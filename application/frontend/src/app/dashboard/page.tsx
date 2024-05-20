"use client";
import { Dashboard } from "@/components/templates/Dashboard";
import { useState } from "react";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const handleChange = (value?: string) => {};

  return (
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center"></div>
      <Dashboard />
      <div className="w-full flex justify-center items-start bg-gray-900"></div>
    </div>
  );
};

export default Page;
