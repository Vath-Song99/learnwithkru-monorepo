
import { SignupToBecomeTeacher } from "@/components";
import { BecomeTeacher } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
import React from "react";

export interface IUserBecomeTeacher {
  firstname: string;
  lastname: string;
  email: string;
  picture: string | null;
}

const getUserData = async (): Promise<{
  isAuth?: boolean;
  errors?: string;
  data: IUserBecomeTeacher | null;
}> => {
  try {
    const cookieString = getCookieString();
    
    if(typeof cookieString === 'object'){
      return cookieString
    }
    const res = await axios.get("http://localhost:3000/v1/users", {
      withCredentials: true,
      headers: { Cookie: cookieString as string},
    });

    if (res.data.errors) {
      return { errors: res.data.errors, data: null };
    }

    return { isAuth: true, data: res.data.data };
  } catch (error: unknown) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const page = async () => {
  const { isAuth, errors, data } = await getUserData();

  if (errors) {
    <div className="w-full flex justify-center pt-10">
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="">{errors}</h1>
      </div>
    </div>;
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <BecomeTeacher  data={data}/>
    </div>
  );
};

export default page;
