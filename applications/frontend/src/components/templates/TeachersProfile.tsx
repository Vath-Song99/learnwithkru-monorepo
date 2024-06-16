import React from "react";
import {
  Profile,
  TeacherInfo,
  TeacherTimeAvailable,
  TeacherVideo,
} from "@/components";
import { ITeacher } from "@/@types/teacher.type";

interface TeachersProfileProps {
  teacher: ITeacher; // Pass the teacher object directly instead of the ID
}

const TeachersProfile: React.FC<TeachersProfileProps> = ({ teacher }) => {
  const date_available = teacher.date_available;
  return (
    <div className=" flex  flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex flex-col  md:justify-end lg:justify-start items-center mb-4 lg:mb-0  pl-5 sm:pl-2">
          <Profile
            first_name={teacher.first_name}
            picture={teacher.picture}
            last_name={teacher.last_name}
            subject={teacher.subject}
            price={teacher.price}
            phonenumber={teacher.phone_number}
          />
          <TeacherInfo
            className="mt-5 text-wrap "
            aboutMe={teacher.bio}
            description={teacher.motivation}
            education={teacher.teaching_experience}
          />
        </div>

        <TeacherVideo
          src={teacher.video}
          students={10}
          ratings={2}
          year_experience={teacher.year_experience}
          type_degree={teacher.type_degree}
          Province={teacher.province}
          university={teacher.university}
        />
      </div>
      <div className="flex justify-center">
        <TeacherTimeAvailable date_available={date_available} />
      </div>
    </div>
  );
};

export default TeachersProfile;
