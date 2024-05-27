"use client";
import { CardTeachers } from "@/components/molecules";
import React, { useContext } from "react";
import { Mycontext } from "@/context/CardContext";
  
const TeacherListCards = ({ search }: { search: string }) => {
  const { Data } = useContext(Mycontext);
  const filteredData = Data.filter((info) => {
    const searchStr = String(search).trim();
    return searchStr === ""
      ? true
      : info.teacherName?.toLowerCase().includes(searchStr.toLowerCase());
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center lg:justify-between flex-wrap gap-4">
        {Data.length === 0 ? (
          <div>
            Teacher No Found
          </div>
        ) : (
          filteredData.map((item, index) => (
            <CardTeachers
              key={index}
              id={item.id}
              imageUrl={item.imageUrl}
              nameSubject={item.nameSubject}
              rateStars={item.rateStars}
              students={item.students}
              reviews={item.reviews}
              teacherName={item.teacherName}
              description={item.description}
              pricing={item.pricing}
              favorite={item.isFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export { TeacherListCards };
