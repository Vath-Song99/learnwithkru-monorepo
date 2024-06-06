"use client"
import React, { useEffect, useState } from "react";
import {
  TeacherDetail,
  TeacherInfo,
  TeacherTimeAvailable,
  TeacherVideo,
} from "@/components";
import axios from "axios";
import { ITeacher } from "@/@types/teacher.type"; // Assuming you have a teacher type defined

const TeachersProfile: React.FC = () => {
  const [teacher, setTeacher] = useState<ITeacher>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handleRequestTeacher();
        setTeacher(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching teacher:", error);
      }
    };

    fetchData();
  }, []);

  const handleRequestTeacher = async () => {
    try {
      const API_ENDPOINT = `http://localhost:3000/v1/teachers/teacher-list?pageSize=10&pageNumber=1&name`; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT, { withCredentials: true });
      return response;
    } catch (error) {
      console.error("Error fetching teacher:", error);
      throw error;
    }
  };

  console.log("this is the teahcer", teacher)

  if (!teacher) {
    return <div>Loading...</div>; // You might want to render a loading indicator until data is fetched
  }
  return (
    <div className="w-[1110px]">
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
            education={teacher.teacher_experience}
            description={teacher.motivation}
          />
          <TeacherVideo src={teacher.video} students={10} ratings={2} />
        </div>
        <div>
          <TeacherTimeAvailable />
        </div>
      </div>
    </div>
  );
};
export default TeachersProfile;
