"use client";
import { CardTeachers } from "@/components/molecules";
import React from "react";
import { ITeacher } from "@/@types/teacher.type";

interface TeacherListCardsProps {
  isLoading: boolean;
  search: string;
  data: ITeacher[];
}

const TeacherListCards: React.FC<TeacherListCardsProps> = ({ isLoading, data = [], search }) => {
  // If data is undefined, default to an empty array
  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-[#7B2CBF]"></div>
        </div>
      </div>
    ); // Render loading state
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center lg:justify-between flex-wrap gap-4">
        {data.length === 0 ? (
          "No teacher found!"
        ) : (
          data.map((item, index) => (
            <CardTeachers
              key={index}
              bio={item.bio}
              date_available={item.date_available}
              first_name={item.first_name}
              last_name={item.last_name}
              picture={item.picture}
              subject={item.subject}
              userId={item.userId}
              phone_number={item.phone_number}
              province={item.province}
              university={""}
              year_experience={0}
              type_degree={""}
              teacher_experience={""}
              motivation={""}
              price={item.price}
              video={""}
              Degree={""}
            />
          ))
        )}
      </div>
    </div>
  );
};

export { TeacherListCards };
