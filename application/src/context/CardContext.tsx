"use client";
import React, { createContext, useState } from "react";
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
  setData: () => {},
  toggleFavorite: () => {},
});

const CardContext = ({ children }: { children: any }) => {
  const [Data, setData] = useState<CardTeachersTypes[]>([
    {
      imageUrl: "Profiles/EnglishTeacher.jpg",
      nameSubject: "Physics",
      teacherName: "Chang Sichi",
      rateStars: 4.3,
      reviews: 532,
      students: 120,
      description:
        "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017",
      pricing: 50000,
      isFavorite: true,
      id: "1",
    },
    {
      imageUrl: "Profiles/example1.jpg",
      nameSubject: "English",
      teacherName: "Chan Tareak",
      rateStars: 4.3,
      reviews: 532,
      students: 120,
      description:
        "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
      pricing: 50000,
      isFavorite: true,
      id: "2",
    },
    {
      imageUrl: "Profiles/teacher1.avif",
      nameSubject: "Physics",
      teacherName: "Chan Tareak",
      rateStars: 4.3,
      reviews: 532,
      students: 120,
      description:
        "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
      pricing: 50000,
      isFavorite: true,
    },
    {
      imageUrl: "Profiles/EnglishTeacher.jpg",
      nameSubject: "Physics",
      teacherName: "Chan Tareak",
      rateStars: 4.3,
      reviews: 532,
      students: 120,
      description:
        "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
      pricing: 50000,
      isFavorite: true,
    },
  ]);

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
