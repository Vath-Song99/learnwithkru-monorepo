"use client";
import React, { createContext, useState } from "react";
interface CardTeachers {
  isFavorite: boolean;
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
  setData: () => { },
  // addNewAuth: async () => { }
});

const CardContext = ({ children }: { children: React.ReactNode }) => {
  const [Data, setData] = useState<CardTeachers[]>([]);

  const contextvalue = {
    Data,
    setData,
  };
  return (
    <Mycontext.Provider value={contextvalue}> {children} </Mycontext.Provider>
  );
};

export default CardContext;
