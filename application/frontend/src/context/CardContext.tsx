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
}
export const Mycontext = createContext<ContextProps>({
  Data: [],
  setData: () => { },
  toggleFavorite: () => { },
});

const CardContext = ({ children }: { children: any }) => {
  const [Data, setData] = useState<CardTeachersTypes[]>([]);
  // const [currentTime, setCurrentTime] = useState<string>(getCurrentDateTime());

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
