import { Typography } from "@/components/atoms";
import React from "react";
import { TeacherInfoTypes } from "./@types";

const TeacherInfo = ({ aboutMe, className, description, education }: TeacherInfoTypes) => {
  return (
    <div className={` flex flex-col items-start gap-5 w-[500px] justify-center md:justify-start lg:justify-center ${className}`}>
      <div className=" flex flex-col justify-center md:justify-start lg:justify-start w-[320px] md:w-[500px] lg:w-[400px]">
        <Typography className="" align="left" fontSize="lg">
          About me
        </Typography>
        <Typography
          className="text-gray-800 text-wrap  pt-1"
          align="left"
          tags="p"
          fontSize="sm"
        >
          {aboutMe}
        </Typography>
      </div>
      <div className=" flex flex-col justify-center md:justify-start lg:justify-start w-[320px] md:w-[500px] lg:w-[400px]">
        <Typography className="" align="left" fontSize="lg">
          Description
        </Typography>
        <Typography
          className="text-gray-800 text-wrap pt-1 "
          align="left"
          tags="p"
          fontSize="sm"

        >
          {description}
        </Typography>

      </div>
      <div className=" flex flex-col justify-center md:justify-start lg:justify-start w-[320px] md:w-[500px] lg:w-[400px]  ">
        <Typography className="" align="left" fontSize="lg">
          Education
        </Typography>
        <Typography
          className="text-gray-800 text-wrap pt-1 "
          align="left"
          tags="p"
          fontSize="sm"
        >
          {education}
        </Typography>
      </div>
    </div>
  );
};

export { TeacherInfo };
