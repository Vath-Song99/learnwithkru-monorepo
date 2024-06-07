import React from "react";

const TeacherNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex ${className}`}>
      <div className="flex mx-auto justify-center items-start p-3">{children}</div>
    </div>

  );
};

export { TeacherNavbar };
