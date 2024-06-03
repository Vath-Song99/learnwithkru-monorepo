"use client"
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import React, { useEffect, useState } from "react";
import { Typography } from "../atoms";
import axios from "axios";
import { SearchInput } from "../molecules";
import { ITeacher } from "@/@types/teacher.type";

const TeacherList = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState<ITeacher[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await handleRequestTeacher();
        // Check if teachers is an array
        if (Array.isArray(data)) {
          setData(data); // Update state with fetched data
        } else {
          console.error("Expected an array of data but got:", data);
        } // Update state with fetched data
      } catch (error) {
        console.error("Unexpected error in fetchData method!:");
        console.error("Fetching data accurs error:", error);
      }
    };

    fetchData()
  }, [search]);

  const handleRequestTeacher = async () => {
    try {
      console.log(search)
      const API_ENDPOINT = `http://localhost:3000/v1/teachers/teacher-list?pageSize=10&pageNumber=1&name=${search}`; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT, { withCredentials: true });

      console.log(response)
      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:", error);
      throw error;
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="w-full grid grid-flow-row gap-8 ">
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
      <TeacherListCards data={data} isLoading={isLoading} search={search} />
    </div>
  );
};

export { TeacherList };
