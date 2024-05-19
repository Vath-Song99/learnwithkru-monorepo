"use client"
import { CardTeachers } from "@/components/molecules";
import React, { useContext, useState } from "react";
import CardContext, { Mycontext } from "@/context/CardContext";
const TeacherListCards = () => {
  const { Data } = useContext(Mycontext);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center lg:justify-between flex-wrap gap-4">
        {Data.map((item, index) => (
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
        ))}
      </div>
    </div >
  );
};
export { TeacherListCards };
