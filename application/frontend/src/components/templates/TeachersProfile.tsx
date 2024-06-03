import {
  TeacherDetail,
  TeacherInfo,
  TeacherTimeAvailable,
  TeacherVideo,
} from "@/components";
import axios from "axios";
import React, { useEffect } from "react";

const TeachersProfile = ({ teacherId }: { teacherId: string }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await handleRequestTeacher();
        // Check if teachers is an array
        if (Array.isArray(data)) {
        } else {
          console.error("Expected an array of data but got:", data);
        } // Update state with fetched data
      } catch (error) {
        console.error("Unexpected error in fetchData method!:");
        console.error("Fetching data accurs error:", error);
      }
    };

    fetchData();
  }, []);

  const handleRequestTeacher = async () => {
    try {
      const API_ENDPOINT = `http://localhost:3000/v1/teacher-profile/${teacherId}`; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT, { withCredentials: true });

      console.log(response);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:", error);
      throw error;
    } finally {
    }
  };
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
