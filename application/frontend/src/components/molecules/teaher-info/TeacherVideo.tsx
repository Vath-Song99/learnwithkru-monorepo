import { Button } from "@/components/atoms";
import React from "react";
import { TeacherVideoTypes } from "./@types";

const TeacherVideo = ({ src, classname, }: TeacherVideoTypes) => {
  return (
    <div className={` w-[500px] md:w-[300px] lg:w-[500px] pt-14 pl-5 sm:pl-0 flex justify-center sm:justify-center md:justify-start md:ml-5 lg:justify-center items-start ${classname}`}>

      <div className="">
        <video controls className="w-full rounded-md">
          <source src={src} type="video/mp4" />
        </video>

        <div className="flex flex-col pt-5 ">

          <Button
            fontColor="black"
            fontSize="lg"
            colorScheme="primary"
            className="h-12 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            <p className="pl-5">
              Save to List
            </p>


          </Button>
        </div>



      </div>
    </div>

  );
};

export { TeacherVideo };
