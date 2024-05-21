"use client";
import { getCurrentDateTime, getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
interface CardTeachers {
  id?: string;
  first_name: string;
  last_name: string;
  className?: string;
  imageUrl?: any;
  nameSubject?: string;
  teacherName?: string;
  rateStars?: number;
  reviews?: number;
  students?: number;
  description?: string;
  pricing?: number;
  isFavorite?: boolean;
  item?: string;
}
interface ContextProps {
  Data: CardTeachers[];
  setData: React.Dispatch<React.SetStateAction<CardTeachers[]>>;
  toggleFavorite: (id: string) => void;
}
export const Mycontext = createContext<ContextProps>({
  Data: [],
  setData: () => { },
  toggleFavorite: () => { },
});

const CardContext = ({ children }: { children: any }) => {
  const [Data, setData] = useState<CardTeachers[]>([]);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachers = await handleRequestTeacher();
        if(!teachers){
          console.error("Theare is no teachers found!");
        }
        setData(teachers.data); // Update state with fetched data
      } catch (error) {
        console.error("Unexpected error in fetchData method!:");
        console.error("Fetching data accurs error:", error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []);


  const handleRequestTeacher = async () => {
    try {

      const API_ENDPOINT = "http://localhost:3000/v1/teachers"; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT ,{ withCredentials: true });

      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:",error);
      throw error;
    }   
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachers = await handleRequestTeacher();
        setData(teachers.Data); // Update state with fetched data
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []);
  const toggleFavorite = (id: string) => {
    setData((prevData) => {
      if (!id) return prevData; // Check if item is undefined
      const index = prevData.findIndex((d) => d.id === id);
      if (index === -1) {
        return prevData;
      }
      const newData = [...prevData];
      // Toggle isFavorite property
      newData[index].isFavorite = !newData[index].isFavorite;
      return newData;
    });
  };

  const contextvalue = {
    Data,
    setData,
    toggleFavorite,

  };
  return (
    <Mycontext.Provider value={contextvalue}> {children} </Mycontext.Provider>
  );
};

export default CardContext;
