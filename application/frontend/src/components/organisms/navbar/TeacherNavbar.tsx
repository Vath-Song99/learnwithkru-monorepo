import React from "react";

const TeacherNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex justify-start md:justify-center lg:justify-between items-start h-[60px] mt-7 w-full md:w-[80%] lg:w-[90%] xl:w-[90%] mx-auto ${className}`}>
      <div className="flex justify-center items-start p-3">{children}</div>
    </div>

  );
};

export { TeacherNavbar };
