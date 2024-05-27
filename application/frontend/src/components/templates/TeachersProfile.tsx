import {
  TeacherDetail,
  TeacherInfo,
  TeacherTimeAvailable,
  TeacherVideo,
} from "@/components";
import React from "react";

const TeachersProfile = () => {
  return (
    <div className="w-[1110px]">
      {/* Homepage Benner */}
      <TeacherDetail />
      {/* <div className="w-[500px] bg-red-500 flex lg:w-full lg:justify-between md:w-[50%] md:justify-center md:gap-2 sm:w-[400px] sm:justify-end mt-16"> */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 ">
        <TeacherInfo
          aboutMe="Hi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career.. I am very passionate with assisting both Kids and Adults to confidently achieve their goal of easily communicating and participating in multilingual environments, both at home and professional"
          education="Hi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career"
          description="I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career"
        />
        <TeacherVideo src={"Video/teacherVDO.mp4"} students={16} ratings={59} />
      </div>
      <div>
        <TeacherTimeAvailable />
      </div>
    </div>
  );
};

export default TeachersProfile;
