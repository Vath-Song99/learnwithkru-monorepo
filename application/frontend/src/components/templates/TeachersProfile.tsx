import {
  TeacherDetail,
  TeacherInfo,
  TeacherTimeAvailable,
  TeacherVideo,
} from "@/components";
import React from "react";

const TeachersProfile = () => {
  return (
    <div className="w-[80%]">
      {/* Homepage Benner */}
      <TeacherDetail />
      <div className="w-full flex justify-between mt-16">
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
