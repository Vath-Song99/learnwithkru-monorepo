"use client";
import { AuthForm } from "@/@types/users/users";
import {
  getCurrentDateTime,
  getLocalStorage,
  setLocalStorage,
} from "@/utils/localStorage";
import axios, { AxiosError } from "axios";
import React, { createContext, useEffect, useState } from "react";
interface CardTeachers {
  userId: string;
  first_name: string;
  last_name: string;
  picture: string;
  subject: string;
  phone_number: string;
  province: string;
  university: string;
  year_experience: number;
  type_degree: string;
  bio: string;
  teacher_experience: string;
  motivation: string;
  date_available: object;
  price: string;
  video: string;
  Degree: string;
}
interface ContextProps {
  Data: CardTeachers[];
  setData: React.Dispatch<React.SetStateAction<CardTeachers[]>>;
  // addNewAuth: (auth: AuthForm) => Promise<void>;
}
export const Mycontext = createContext<ContextProps>({
  Data: [],
  setData: () => {},
  // addNewAuth: async () => { }
});

const CardContext = ({ children }: { children: any }) => {
  const [Data, setData] = useState<CardTeachers[]>([]);
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
    fetchData(); // Call the fetchData function
  }, []);

  const handleRequestTeacher = async () => {
    try {
      const API_ENDPOINT = "http://localhost:3000/v1/teachers/teachers-list?pageSize=1&pageNumber=2"; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT, { withCredentials: true });

      console.log(response)
      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:", error);
      throw error;
    }
  };

  //  student Fetching
  const [studentData, setStudentData] = useState([]);

  const contextvalue = {
    Data,
    setData,
  };
  return (
    <Mycontext.Provider value={contextvalue}> {children} </Mycontext.Provider>
  );
};

export default CardContext;
