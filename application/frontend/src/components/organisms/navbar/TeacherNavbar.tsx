import React from "react";

const TeacherNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` flex justify-center sm:justify-center md:justify-center items-start w-full h-[60px] mt-7 bg-[#F4F4F8]`}>
      <div className=" flex justify-evenly items-start p-3">{children}</div>
    </div>
  );
};

export { TeacherNavbar };
