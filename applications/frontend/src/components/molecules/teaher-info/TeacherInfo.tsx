import { Typography } from "@/components/atoms";
import React from "react";
import { TeacherInfoTypes } from "./@types";

const TeacherInfo = ({ aboutMe, className, description, education }: TeacherInfoTypes) => {
  return (
    <div className={` flex flex-col gap-14 ${className}`}>
      <div className="  flex flex-col justify-center md:justify-start lg:justify-center w-[320px] md:w-[500px] lg:w-[500px]">
        <Typography className="" align="left" fontSize="lg">
          About me
        </Typography>
        <Typography
          className="text-gray-800 text-wrap  pt-1 w-[450px] sm:w-[450px] md:w-[450px] lg:w-[600px] "
          align="left"
          tags="p"
          fontSize="sm" 
        >
          {aboutMe}
        </Typography>
      </div>
      <div className=" flex flex-col justify-center md:justify-start lg:justify-start w-[320px] md:w-[500px] lg:w-[500px]">
        <Typography className="" align="left" fontSize="lg">
          Description
        </Typography>
        <Typography
          className="text-gray-800 text-wrap pt-1  w-[450px] sm:w-[450px] md:w-[450px] lg:w-[600px]"
          align="left"
          tags="p"
          fontSize="sm"

        >
          {description}
        </Typography>

      </div>
      <div className=" flex flex-col justify-center md:justify-start lg:justify-start w-[300px] md:w-[500px] lg:w-[500px]  ">
        <Typography className="" align="left" fontSize="lg">
          Education
        </Typography>
        <Typography
          className="text-gray-800 text-wrap pt-1  w-[450px] sm:w-[450px] md:w-[450px] lg:w-[600px]"
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
