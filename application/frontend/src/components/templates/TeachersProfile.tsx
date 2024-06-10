"use client";
import React from "react";
import {
  TeacherDetail,
  TeacherInfo,
  TeacherTimeAvailable,
  TeacherVideo,
} from "@/components";
import { ITeacher } from "@/@types/teacher.type";

interface TeachersProfileProps {
  teacher: ITeacher; // Pass the teacher object directly instead of the ID
}

const TeachersProfile: React.FC<TeachersProfileProps> = ({ teacher }) => {
  if (!teacher) {
    return <div>Loading...</div>; // You might want to render a loading indicator until data is fetched
  }
  return (
    <div className="w-[1440px]">
      <div className="mb-10">
        <TeacherDetail
          first_name={teacher.first_name}
          picture={teacher.picture}
          last_name={teacher.last_name}
          subject={teacher.subject}
        />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
          <TeacherInfo
            aboutMe={teacher.bio}
            education={teacher.teaching_experience}
            description={teacher.motivation}
          />
          <TeacherVideo src={teacher.video} students={10} ratings={2} />
        </div>
        <div className="flex justify-center">
          <TeacherTimeAvailable />
        </div>
      </div>
    </div>
  );
};

export default TeachersProfile;
