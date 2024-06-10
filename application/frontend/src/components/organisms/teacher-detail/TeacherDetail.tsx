import React from "react";
import Image from "next/image";
import { Profile } from "@/components/molecules";

interface TopTeachersListProps {
  first_name: string;
  picture: string;
  last_name: string;
  subject: string

  // Ensure 'data' prop exists and is of type ITeacher
}

const TeacherDetail: React.FC<TopTeachersListProps> = ({ first_name, picture, last_name, subject }) => {
  return (
    <div className="w-full pb-40">
      <div className="w-full relative">
        <Image
          src={picture} // Assuming 'picture' is a property of ITeacher
          width={1200}
          height={600}
          alt={first_name}
          className="w-full h-[200px] md:h-[280px] rounded-md border object-cover"
        />
        <div className="w-full absolute top-36 md:top-52">
          <div className="w-full flex justify-center">
            <Profile picture={picture} first_name={first_name} last_name={last_name} subject={subject} /> {/* Assuming 'data' should be individual teacher data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeacherDetail };