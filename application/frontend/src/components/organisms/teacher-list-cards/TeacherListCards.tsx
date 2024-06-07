"use client";
import { CardTeachers } from "@/components/molecules";
import React from "react";
import { ITeacher } from "@/@types/teacher.type";

<<<<<<< HEAD
const TeacherListCards = ({ isLoading, data }: { isLoading: boolean, search: string, data: ITeacher[] }) => {
  // const filteredData = data.filter((info) => {
  //   const searchStr = String(search).trim();
  //   return searchStr === ""
  //     ? true
  //     : info.first_name.toLowerCase().includes(searchStr.toLowerCase());
  // });
=======
interface TeacherListCardsProps {
  isLoading: boolean;
  data: ITeacher[];
}

const TeacherListCards: React.FC<TeacherListCardsProps> = ({
  isLoading,
  data = [],
}) => {
  // If data is undefined, default to an empty array
>>>>>>> 719902b1a3fe2e3d24eb6ef0f293efc1560560d4
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
<<<<<<< HEAD
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
              isFavorite={false}
              onFavoriteClick={() => { }} />
          ))
        )}
=======
        {data.map((item: ITeacher, index: number) => (
          <CardTeachers
            key={index}
            items={item}
            isFavorite={false}
            onFavoriteClick={() => item._id}
          />
        ))}
>>>>>>> 719902b1a3fe2e3d24eb6ef0f293efc1560560d4
      </div>
    </div>
  );
};

export { TeacherListCards };
