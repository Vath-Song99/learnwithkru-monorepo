import { SearchInput } from "@/components/molecules";
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import CardContext from "@/context/CardContext";
import React from "react";

const TeacherList = () => {
  return (
    <div className="w-full grid grid-flow-row gap-8 ">
      <CardContext>
        <FilterTeachers />
        <SearchInput />
        <TeacherListCards />
      </CardContext>
    </div>
  );
};

export { TeacherList };
