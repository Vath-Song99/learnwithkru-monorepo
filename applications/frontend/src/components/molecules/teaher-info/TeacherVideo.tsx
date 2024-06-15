import React from "react";
import { TeacherVideoTypes } from "./@types";
import { Button, Typography } from "@/components/atoms";
import { RatingStar } from "@/components/organisms/rating-star";

const TeacherVideo = ({ src, classname, year_experience, type_degree, Province, university }: TeacherVideoTypes) => {
  return (
    <div className={`relative w-[500px] md:w-[300px] lg:w-[500px] pt-14 pl-5 sm:pl-0 flex justify-center sm:justify-center md:justify-start md:ml-5 lg:justify-center items-start ${classname}`}>

      <div className="sticky top-5">
        <video controls className="w-full rounded-md">
          <source src={src} type="video/mp4" />
        </video>

        <div className="flex flex-col pt-5 items-center gap-5  ">
          <div className="flex justify-between w-full   ">
            <Typography>
              Year of Experience
            </Typography>
            <Typography>
              {year_experience}
            </Typography>
          </div>

          <div className="flex  justify-between w-full  ">
            <Typography>
              Type Degree
            </Typography>
            <Typography>
              {type_degree}
            </Typography>
          </div>
          <div className="flex  justify-between w-full">
            <Typography>
              Province
            </Typography>
            <Typography>
              {Province}
            </Typography>
          </div>
          <div className="flex  justify-between w-full   ">
            <Typography>
              Went from
            </Typography>
            <Typography>
              {university}
            </Typography>
          </div>
          <div className="">
            <RatingStar>
            </RatingStar>
          </div>






        </div>
      </div>
    </div>

  );
};

export { TeacherVideo };
