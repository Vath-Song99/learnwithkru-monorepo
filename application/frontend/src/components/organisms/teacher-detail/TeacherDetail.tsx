"use client";
import React from "react";
import Image from "next/image";
import { Profile } from "@/components/molecules";
const TeacherDetail = () => {
  return (
    <div className="w-full pb-40">
      <div className="w-full  relative">
        <Image
          src={"/Profiles/CoverTeacher.avif"}
          width={1200}
          height={600}
          alt="chroychangvar"
          className="w-full h-[200px] md:h-[280px] rounded-md border object-cover"
        ></Image>
        <div className="w-full absolute top-36 md:top-52">
          <div className="w-full flex justify-center">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeacherDetail };
