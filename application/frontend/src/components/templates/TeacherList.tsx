"use client";
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import React, { useState } from "react";
import { Typography } from "../atoms";
import { SearchInput } from "../molecules";
import { ItemList } from "../molecules/pagination";
import { ITeacher, PageDetails } from "@/@types/teacher.type";

interface TeacherListProps {
  initialData: {errors?: string , data: {teachers: ITeacher[] , detail: PageDetails}| null};
  filter: {search_query: string}
}

const TeacherList: React.FC<TeacherListProps> = ({ initialData }) => {
  const { data , errors } = initialData;
  const { teachers , detail } = data!
  const { totalPages, currentPage, totalTeachers } = detail;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);


  return (
    <div className="w-full grid grid-flow-row gap-8">
      <div className="w-[80%] mx-auto">
        <Typography align="left" variant="bold" fontSize="lg">
          See your future teacher
        </Typography>
      </div>
      <SearchInput />
      <FilterTeachers />
      <TeacherListCards data={teachers} isLoading={isLoading}  />
      <ItemList
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
    </div>
  );
};

export { TeacherList };
