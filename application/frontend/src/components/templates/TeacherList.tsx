"use client";
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import React, { useState } from "react";
import { Typography } from "../atoms";
import { SearchInput } from "../molecules";
import { ItemList } from "../molecules/pagination";

interface TeacherListProps {
  initialData: any;
}

const TeacherList: React.FC<TeacherListProps> = ({ initialData }) => {
  const { data, detail } = initialData;
  const { totalPages, currentPage, totalTeachers } = detail;
  const [search, setSearch] = useState("");
  const [teachers, setTeachers] = useState(data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // const handleRequestTeacher = async () => {
  //   setIsLoading(true);
  //   try {
  //     const API_ENDPOINT = `http://localhost:3000/v1/teachers/teacher-list?pageSize=10&pageNumber=${pageNumber}&name=${search}`;
  //     const response = await axios.get(API_ENDPOINT, { withCredentials: true });
  //     const { totalPages, totalTeachers, currentPage } = response.data.detail;
  //     if (Array.isArray(response.data.data)) {
  //       setData(response.data.data);
  //       setTotalPages(totalPages);
  //     } else {
  //       console.error("Expected an array of data but got:", response.data.data);
  //     }
  //   } catch (error: any) {
  //     console.error("Error fetching teachers:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   const delaySearch = setTimeout(() => {
  //     handleRequestTeacher();
  //   }, 100); // Adjust the delay time as needed (milliseconds)

  //   return () => clearTimeout(delaySearch); // Clear timeout on component unmount
  // }, [search, pageNumber]);

  return (
    <div className="w-full grid grid-flow-row gap-8">
      <div className="w-[80%] mx-auto">
        <Typography align="left" variant="bold" fontSize="lg">
          See your future teacher
        </Typography>
      </div>
      <SearchInput setSearch={setSearch} />
      <FilterTeachers />
      <TeacherListCards data={data} isLoading={isLoading} search={search} />
      <ItemList
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
    </div>
  );
};

export { TeacherList };
