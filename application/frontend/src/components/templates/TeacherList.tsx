"use client"
import { SearchInput } from "@/components/molecules";
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import CardContext from "@/context/CardContext";
import React, { useState } from "react";
import { Typography } from "../atoms";

const TeacherList = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="w-full grid grid-flow-row gap-8 ">
      <CardContext>
        <div className="w-[80%] mx-auto">
        <Typography
        align="left"
        variant="bold"
        fontSize="lg"
        >
          See you future teacher
        </Typography>
        </div>
        <SearchInput setSearch={setSearch} />
        <FilterTeachers />
        <TeacherListCards search={search} />
      </CardContext>
    </div>
  );
};

export { TeacherList };
