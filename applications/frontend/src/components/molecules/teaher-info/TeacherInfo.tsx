import { Typography } from "@/components/atoms";
import React from "react";
import { TeacherInfoTypes } from "./@types";

const TeacherInfo = ({ aboutMe, education, description }: TeacherInfoTypes) => {
  return (
    <div className="w-[100%] p-5 mt-3 bg-[#FAFAFA] flex flex-col ">
      <div className="">
        <Typography className="" align="left" fontSize="md">
          About me
        </Typography>
        <Typography
          className="text-gray-800"
          align="left"
          tags="p"
          fontSize="sm"
        >
          {aboutMe}
        </Typography>
      </div>

      <div className="">
        <Typography className="" align="left" fontSize="md">
          Education
        </Typography>
        <Typography
          className="text-gray-800"
          align="left"
          tags="p"
          fontSize="sm"
        >
          {education}
        </Typography>
      </div>

      <div className="">
        <Typography className="" align="left" fontSize="md">
          Description
        </Typography>
        <Typography
          className="text-gray-800"
          align="left"
          tags="p"
          fontSize="sm"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export { TeacherInfo };
