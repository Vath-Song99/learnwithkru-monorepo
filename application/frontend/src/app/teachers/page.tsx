import { ITeacher, PageDetails } from "@/@types/teacher.type";
import { IUser } from "@/@types/user";
import { Footer, Navbar, TeacherList } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
import { notFound } from "next/navigation";

// Utility function to get cookies as a string for headers

const getUserData = async (): Promise<{
  isAuth?: boolean;
  errors?: string;
  data: IUser | null;
}> => {
  try {
    const cookieString = getCookieString();
    if (
      !cookieString.includes("persistent") &&
      !cookieString.includes("session")
    ) {
      return { isAuth: false, data: null };
    }

    const res = await axios.get("http://localhost:3000/v1/users", {
      withCredentials: true,
      headers: { Cookie: cookieString },
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

async function getTeachersData({
  search_query,
  pageNumber,
}: {
  search_query: string;
  pageNumber: number;
}): Promise<{
  errors?: string;
  data: { teachers: ITeacher[]; detail: PageDetails } | null;
}> {
  try {
    const API_ENDPOINT = `http://localhost:3000/v1/teachers?pageSize=2&pageNumber=${pageNumber}&name=${search_query}`;
    const res = await axios.get(API_ENDPOINT);

    return { data: { teachers: res.data.data, detail: res.data.detail } };
  } catch (error: any) {
    if (error.response?.status === 404) {
      notFound();
    }
    console.error("Error fetching teachers data:", error);
    throw error;
  }
}

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { isAuth, data } = await getUserData();
  const search_query = (searchParams.search_query as string) || "";
  const pageNumber = Number(searchParams.pageNumber as string) || 1;
  const teachers = await getTeachersData({ search_query, pageNumber });

  return (
    <div className="max-w-full grid gap-5">
      <div className="w-full flex justify-center items-center border shadow-sm">
        <Navbar authState={{ isAuth: isAuth ?? false, user: data }} />
      </div>
      <TeacherList initialData={teachers} />
      <div className="w-full flex justify-center items-start bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
