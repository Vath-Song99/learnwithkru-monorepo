import { Typography } from "@/components/atoms";
import { RatingStar } from "@/components/organisms/rating-star";
import Image from "next/image";
import React from "react";

const Profile = ({ className }: { className?: string }) => {
  return (
    <div className={` w-[200px] h-auto ${className}`}>
      <div className="w-full flex justify-center items-start">
        <Image
          src={"/Profiles/EnglishTeacher.jpg"}
          width={500}
          height={500}
          alt="Smoeury Songvat profile"
          className="w-[160px] h-[160px] rounded-full object-cover border-4 border-white"
        ></Image>
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        <Typography align="center" fontSize="md" variant="semibold">
          Smoeury Songvat
        </Typography>
        <Typography
          align="center"
          fontSize="sm"
          colorscheme="tb"
          variant="normal"
          className="text-gray-500"
        >
          English teacher
        </Typography>
        <RatingStar />
      </div>
    </div>
  );
};

export { Profile };
