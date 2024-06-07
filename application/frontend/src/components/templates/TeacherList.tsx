"use client";

import React, { useState } from "react";
import { FilterTeachers, TeacherListCards } from "@/components/organisms";
import { Typography } from "../atoms";
import { SearchInput } from "../molecules";
import { ItemList } from "../molecules/pagination";
import { ITeacher, PageDetails } from "@/@types/teacher.type";

<<<<<<< HEAD
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

    const delaySearch = setTimeout(() => {
      fetchData();
    }, 500); // Adjust the delay time as needed (milliseconds)

    return () => clearTimeout(delaySearch); // Clear timeout on component unmount
  }, [search]);

  const handleRequestTeacher = async () => {
    try {
      console.log(search)
      const API_ENDPOINT = `http://localhost:3000/v1/teachers/teacher-list?pageNumber=1&pageSize=10&&name=${search}`; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT, { withCredentials: true });

      console.log(response)
      console.log(API_ENDPOINT)
      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:", error);
      throw error;
    } finally {
      setIsLoading(false)
    }
=======
interface TeacherListProps {
  initialData: {
    errors?: string;
    data: {
      teachers: ITeacher[];
      detail: PageDetails;
    } | null;
>>>>>>> 719902b1a3fe2e3d24eb6ef0f293efc1560560d4
  };
}

const TeacherList: React.FC<TeacherListProps> = ({ initialData }) => {
  const { data } = initialData;
  const [pageNumber, setPageNumber] = useState<number>(
    data?.detail.currentPage || 1
  );

  if (!data) {
    return (
      <div className="w-full text-center">
        <Typography align="center" variant="bold" fontSize="lg">
          Error loading data.
        </Typography>
      </div>
    );
  }

  const { teachers, detail } = data;
  const { totalPages } = detail;

  return (
<<<<<<< HEAD
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
=======
    <div className="w-full grid grid-flow-row gap-y-4">
      <div className="w-[80%] mx-auto">
        <Typography align="left" variant="bold" fontSize="md">
          See your future teacher
        </Typography>
      </div>
      <SearchInput />
      <FilterTeachers />
      <TeacherListCards data={teachers} isLoading={!teachers.length} />
      <ItemList
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
>>>>>>> 719902b1a3fe2e3d24eb6ef0f293efc1560560d4
    </div>
  );
};

export { TeacherList };
