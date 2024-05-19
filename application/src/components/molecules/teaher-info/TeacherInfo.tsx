import { Typography } from "@/components/atoms";
import React from "react";
import { TeacherInfoTypes } from "./@types";

const TeacherInfo = ({ aboutMe, education, description }: TeacherInfoTypes) => {
  return (
    <div className="w-[55%] bg-[#FAFAFA] px-4 py-3 grid grid-flow-row gap-4">
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
