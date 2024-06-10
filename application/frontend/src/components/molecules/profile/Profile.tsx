"use client";
import { Typography } from "@/components/atoms";
import { RatingStar } from "@/components/organisms/rating-star";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  className?: string;
  picture: string;
  first_name: string;
  last_name: string;
  subject: string;
}

const Profile: React.FC<ProfileProps> = ({ className, picture, first_name, last_name, subject }) => {
  return (
    <div className={`w-[200px] h-auto ${className}`}>
      <div className="w-full flex justify-center items-start">
        <Image
          src={picture}
          width={500}
          height={500}
          alt={`${first_name} ${last_name} Profile`}
          className="w-[160px] h-[160px] rounded-full object-cover border-4 border-white"
        />
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        <Typography align="center" fontSize="md" variant="semibold">
          {`${first_name} ${last_name}`}
        </Typography>
        <Typography
          align="center"
          fontSize="sm"
          colorscheme="tb"
          variant="normal"
          className="text-gray-500"
        >
          {subject}
        </Typography>
        <RatingStar />
      </div>
    </div>
  );
};

export { Profile };
