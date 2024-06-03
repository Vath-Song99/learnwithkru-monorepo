"use client";
import { CardTeachers } from "@/components/molecules";
import React from "react";
import { ITeacher } from "@/@types/teacher.type";

<<<<<<< HEAD
const TeacherListCards = ({ data }: { search: string, data: ITeacher[] }) => {
=======
const TeacherListCards = ({ isLoading, data , search }: { isLoading: boolean , search: string, data: ITeacher[]}) => {
>>>>>>> 54cae8589eca2acfe22f8d246aaa1377fd005395
  // const filteredData = data.filter((info) => {
  //   const searchStr = String(search).trim();
  //   return searchStr === ""
  //     ? true
  //     : info.first_name.toLowerCase().includes(searchStr.toLowerCase());
  // });
<<<<<<< HEAD
  const { Data, setData } = useContext(Mycontext);
  const handleFavoriteClick = (userId: string) => {
    setData((prevData) =>
      prevData.map((teacher) =>
        teacher.userId === userId
          ? { ...teacher, isFavorite: !teacher.isFavorite }
          : teacher
      )
    );
  };
=======
  if (isLoading) {
    return <div className="w-full flex justify-center">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-[#7B2CBF]">
        </div>
      </div>
    </div>; // Render loading state
  }
>>>>>>> 54cae8589eca2acfe22f8d246aaa1377fd005395
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
              isFavorite={false}
              onFavoriteClick={() => handleFavoriteClick(item.userId)} />
          ))
        )}
      </div>
    </div>
  );
};

export { TeacherListCards };
