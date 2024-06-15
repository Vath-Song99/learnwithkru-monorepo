"use client";
import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
  Footer,
} from "@/components/organisms";
import { ShowEasyText, KruVision, SearchTopTeachers } from "@/components/molecules";
import { useEffect, useState } from "react";
import { ITeacher } from "@/@types/teacher.type";
import axios from "axios";

const Homepage = ({ isAuth }: { isAuth: boolean }) => {
  const [search, setSearch] = useState("");

  const [data, setData] = useState<ITeacher[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handleRequestTeacher();


        setData(response.data)
      } catch (error) {
        console.error("Unexpected error in fetchData method!:");
        console.error("Fetching data accurs error:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, search]);


  console.log(data)

  const handleRequestTeacher = async () => {

    try {
      // const apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD || "https://api.learnwithkru.com";
      const API_ENDPOINT = `https://api.learnwithkru.com/v1/teachers?pageSize=6&pageNumber=1`;// Replace with your actual token
      console.log("here api: ", API_ENDPOINT)
      const response = await axios.get(API_ENDPOINT);
      if (!response.data || response.data.data) {
        console.log(`An erorr accur: ${response.data?.errors}`)
      }
      console.log(response);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-full">
      {/* Homepage Benner */}

      <HomepageSlider />

      {/* Home-Benner */}

      <HomeBenner isAuth={isAuth} />

      {/* Search Input */}

      <SearchTopTeachers setSearch={setSearch} />

      <div className="grid gap-8 md:gap-12">
        {/*  all subject */}
        {isLoading ? (
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
