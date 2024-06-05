"use client";
import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
  Footer,
} from "@/components/organisms";
import { SearchInput, ShowEasyText, KruVision } from "@/components/molecules";
import { useEffect, useState } from "react";
import { ITeacher } from "@/@types/teacher.type";
import axios from "axios";

const Homepage = ({ isAuth }: { isAuth: boolean }) => {
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
    // const delaySearch = setTimeout(() => {
    //   fetchData();
    // }, 500); // Adjust the delay time as needed (milliseconds)

    // return () => clearTimeout(delaySearch); // Clear timeout on component unmount
  }, [search]);

  const handleRequestTeacher = async () => {
    try {
      console.log(search)
      const API_ENDPOINT = `http://localhost:3000/v1/teachers/teacher-list?pageSize=3&pageNumber=1&name=${search}`; // Replace with your actual token
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
    <div className="max-w-full">
      {/* Homepage Benner */}

      <HomepageSlider />

      {/* Home-Benner */}

      <HomeBenner isAuth={isAuth} />

      {/* Search Input */}

      <SearchInput setSearch={setSearch} />

      <div className="grid gap-8 md:gap-12">
        {/*  all subject */}
        {
          isLoading ? (
            <div className="w-full flex justify-center pt-10">
              <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-[#7B2CBF]">
                </div>
              </div>
            </div> // Render loading state

          ) : (
            <TopTeachersList data={data} />
          )}

        {/* benner card */}
        <KruVision />
        <ShowEasyText />
      </div>
      <div className="w-full  flex justify-center items-start bg-black">
        <Footer />
      </div>
    </div>
  );
};

export { Homepage };
