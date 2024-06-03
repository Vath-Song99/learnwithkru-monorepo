"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const CardTeachersSkeleton = () => {
  return (
    <div className="w-full lg:w-[49%] flex justify-evenly sm:justify-around border-[1.5px] px-1 md:px-0 shadow-sm pt-2 pb-1 md:py-3 hover:border-3 hover:border-[#455445]">
      <div className="flex flex-col items-center gap-1 justify-center md:justify-start w-[100px] sm:w-[130px] md:w-[140px] lg:w-[120px]">
        <Skeleton className="w-full h-[100px] sm:h-[110px] md:h-[140px] lg:h-[120px]" />
        <Skeleton.Button className="md:hidden" width="80px" height="24px" />
      </div>
      <div className="w-[65%] grid gap-[2px]">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" />
          <Skeleton.Button width="24px" height="24px" />
          <Skeleton.Button className="hidden md:block" width="80px" height="24px" />
        </div>
        <div className="w-full md:w-[75%] flex items-center">
          <Skeleton className="w-20 md:w-24 h-6" />
        </div>
        <div className="flex items-center">
          <Skeleton width="14px" height="14px" />
          <Skeleton className="ml-1 h-4 w-20" />
        </div>
        <Skeleton className="text-xs text-[#455445] truncate md:text-clip" width="100%" height="48px" />
        <Skeleton className="tracking-wide hover:underline" width="80px" height="20px" />
      </div>
    </div>
  );
};

export default CardTeachersSkeleton;
