
import { ITeacher } from "@/@types/teacher.type";
import DefaultLayout from "@/components/organisms/dashboard/DefaultLayout";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
import { Container, Grid } from '@mui/material';
import { TimeAvailable } from "@/components/organisms/dashboard/teacher-edits/TimeAvailable";

interface ITeacherData {
  errors?: string;
  data: ITeacher | null;
  isAuth?: boolean;
}

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

  return (
    <DefaultLayout>
      <Container maxWidth="lg" className="py-4 ml-[10px] sm:ml-[100px] md:ml-[100px]">
        <Grid container className="justify-center" spacing={1}>
          <Grid item  className="bg-white shadow-md w-[400px] p-1 sm:w-[600px] md:w-[800px]">
            <TimeAvailable teacher={selectedTeacher} />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default Page;