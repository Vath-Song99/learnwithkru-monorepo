/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Navbar, Footer, Homepage } from "@/components";
import { TeacherList } from "@/components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [authState, setAuthState] = useState<{ isAuth: boolean, user: any }>({
    isAuth: false,
    user: null
  });
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/v1/users/user-profile";
        const data = await handleUserProfile(url);
        console.log('User profile data:', data);
        if (!data.data) {
          console.log('User not found!', data.data);
        }
        setAuthState({
          isAuth: true,
          user: data.data
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setIsLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []); // Add dependencies here if needed

  const handleUserProfile = async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url, { withCredentials: true });

      if (response.data.errors) {
        console.log("An error occurred:", response.data.errors);
      }
      return response.data;
    } catch (error: unknown) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  if (isLoading) {
    return <div
      className="w-full flex justify-center pt-10"
    > <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-blue-500">
        </div>
      </div></div>; // Render loading state
  }
  return (
    <div className="max-w-full grid gap-5">
      <div className="w-full flex justify-center items-center border shadow-sm">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} authState={authState} />
      </div>
      <TeacherList />
      <div className="w-full  flex justify-center items-start bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default page;
