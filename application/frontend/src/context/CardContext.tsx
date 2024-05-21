"use client";
import { getCurrentDateTime, getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
interface CardTeachersTypes {
  id?: string;
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
  Data: CardTeachersTypes[];
  setData: React.Dispatch<React.SetStateAction<CardTeachersTypes[]>>;
  toggleFavorite: (id: string) => void;
  currentTime: string;
}
export const Mycontext = createContext<ContextProps>({
  Data: [],
  setData: () => { },
  toggleFavorite: () => { },
  currentTime: "",
});

const CardContext = ({ children }: { children: any }) => {
  const [Data, setData] = useState<CardTeachersTypes[]>([]);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachers = await fetchingTeachers();
        setData(teachers.Data); // Update state with fetched data
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []);

  const fetchingTeachers = async () => {
    try {
      const API_ENDPOINT = "http://localhost:3000/v1/teachers";
      const token = ""; // Replace with your actual token
      const response = await axios.get(API_ENDPOINT);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching teachers:", error.response ? error.response.data : error.message);
      throw error;
    }
  };


  useEffect(() => {
    // Retrieve stored date and time or set initial value
    const storedDateTime = getLocalStorage('storedDateTime');
    if (storedDateTime) {
      setCurrentTime(storedDateTime);
    } else {
      const initialDateTime = getCurrentDateTime();
      setCurrentTime(initialDateTime);
      setLocalStorage('storedDateTime', initialDateTime);
    }

    // Update current date and time every second
    const intervalId = setInterval(() => {
      const newDateTime = getCurrentDateTime();
      setCurrentTime(newDateTime);
      // Do not update localStorage here to prevent overwriting
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
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
    currentTime,

  };
  return (
    <Mycontext.Provider value={contextvalue}> {children} </Mycontext.Provider>
  );
};

export default CardContext;
