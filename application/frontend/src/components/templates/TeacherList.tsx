"use client"
import { SearchInput } from "@/components/molecules";
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import CardContext from "@/context/CardContext";
import React, { useState } from "react";

const TeacherList = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="w-full grid grid-flow-row gap-8 ">
      <CardContext>
        <FilterTeachers />
        <SearchInput setSearch={setSearch} />
        <TeacherListCards search={search} />
      </CardContext>
    </div>
  );
};

export { TeacherList };
