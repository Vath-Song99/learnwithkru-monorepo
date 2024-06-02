"use client";
import { CardTeachers } from "@/components/molecules";
import React, { useContext } from "react";
import { Mycontext } from "@/context/CardContext";
import { ITeacher } from "@/@types/teacher.type";

const TeacherListCards = ({  data }: { search: string , data: ITeacher[]}) => {
  // const filteredData = data.filter((info) => {
  //   const searchStr = String(search).trim();
  //   return searchStr === ""
  //     ? true
  //     : info.first_name.toLowerCase().includes(searchStr.toLowerCase());
  // });

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center lg:justify-between flex-wrap gap-4">
        {data.length === 0 ? ("No teacher found!"
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
