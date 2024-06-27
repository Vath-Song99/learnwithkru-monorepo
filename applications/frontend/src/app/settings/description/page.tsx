// pages/teachers.tsx
import { ITeacher } from "@/@types/teacher.type";
import DefaultLayout from "@/components/organisms/dashboard/DefaultLayout";
import { ProfileTeacher } from "@/components/organisms/dashboard/profile-teacher/ProfileTeacher";
import UpdateTeacher from "@/components/organisms/dashboard/profile-teacher/UpdateTeacher";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import { IAuth } from "@/@types/auth";
import { handleAxiosError } from "@/utils/axiosErrorhandler";
import { Description } from "@/components/organisms/dashboard/teacher-edits/Description";

interface ITeacherData {
  errors?: string;
  data: ITeacher | null;
  isAuth?: boolean;
}

const getUserData = async (): Promise<IAuth> => {
  const cookieString = getCookieString();
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://api.learnwithkru.com";
  try {
    if (typeof cookieString === "object") {
      return cookieString;
    }
    const res = await axios.get(`${apiUrl}/v1/users`, {
      withCredentials: true,
      headers: { Cookie: cookieString as string },
    });

    return { isAuth: true, data: res.data.data };
  } catch (error: unknown) {
    handleAxiosError(error, {
      handleErrorResponse: (response) => {
        const { errors } = response.data;

        if (errors) {
          return { isAuth: false, errors: errors?.message, data: null };
        }
      },
    });
    throw error;
  }
};

async function getTeachersData(): Promise<ITeacherData> {
  try {
    const cookieStringOrAuth = getCookieString();

    if (typeof cookieStringOrAuth === "object") {
      return { errors: "Not authenticated", data: null };
    }
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://api.learnwithkru.com";
    const API_ENDPOINT = `${apiUrl}/v1/teachers/`;
    const res = await axios.get(API_ENDPOINT, {
      withCredentials: true,
      headers: { Cookie: cookieStringOrAuth },
    });

    if (res.data.errors) {
      return { errors: res.data.errors, data: null };
    }

    return { isAuth: true, data: res.data.data };
  } catch (error: any) {
    throw error;
  }
}

const Page = async () => {
  const teachersResponse = await getTeachersData();
  const selectedTeacher = teachersResponse?.data;
  const { isAuth, errors, data } = await getUserData();

  if (errors) {
    return (
      <div className="w-full flex justify-center pt-10">
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="">{errors}</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center p-8">
      <Grid item xs={12} md={7} className="bg-white shadow-md p-4">
        <Description teacher={selectedTeacher} />
      </Grid>
      <Grid item xs={12} md={5} className="bg-white shadow-md p-4">
        <UpdateTeacher />
      </Grid>
    </div>
  );
};

export default Page;