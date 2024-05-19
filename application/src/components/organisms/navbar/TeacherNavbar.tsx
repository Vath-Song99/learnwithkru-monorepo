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
      className={` flex justify-center sm:justify-center md:justify-center items-start  bg-[#F4F4F8]`}>
      <div className=" flex justify-center items-start">{children}</div>
    </div>
  );
};

export { TeacherNavbar };
