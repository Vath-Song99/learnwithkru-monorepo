<<<<<<< HEAD
<<<<<<<< HEAD:application/frontend/src/app/become-teacher/become-teacher-form/page.tsx
import { SignupToBecomeTeacher } from "@/components";
========
import { BecomeTeacher } from "@/components";
>>>>>>>> 41878da432bf700523c49376838f4ec8d51f01ad:applications/frontend/src/app/become-teacher/page.tsx
=======

import { BecomeTeacher } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
>>>>>>> c8bd534417799e1117ec66f94609eb8dcff02dcd
import React from "react";

export interface IUserBecomeTeacher {
  firstname: string;
  lastname: string;
  email: string;
  picture: string | null;
}

const getUserData = async (): Promise<{
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

    return { data: res.data.data };
  } catch (error: unknown) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const page = async () => {
  const { errors, data } = await getUserData();

  if (errors) {
    <div className="w-full flex justify-center pt-10">
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="">{errors}</h1>
      </div>
    </div>;
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
<<<<<<< HEAD
      <SignupToBecomeTeacher />
=======
      <BecomeTeacher  data={data}/>
>>>>>>> c8bd534417799e1117ec66f94609eb8dcff02dcd
    </div>
  );
};

export default page;