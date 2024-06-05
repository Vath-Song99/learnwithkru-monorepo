import { ITeacher, PageDetails } from "@/@types/teacher.type";
import { IUser } from "@/@types/user";
import { Footer, Navbar, TeacherList } from "@/components";
import axios from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";


const getUserData = async (): Promise<{
  isAuth?: boolean;
  errors?: string;
  data: IUser | null;
}> => {
  try {
    const cookiesStore = cookies();
    const _ga = cookiesStore.get("_ga");
    const persistent = cookiesStore.get("persistent");
    const session = cookiesStore.get("session");
    const sessionSig = cookiesStore.get("session.sig");

    if (!persistent?.value && !session?.value) {
      return { isAuth: false, data: null };
    }
    const res = await axios.get("http://localhost:3000/v1/users", {
      withCredentials: true,
      headers: {
        Cookie: `_ga=${_ga?.value}persistent=${persistent?.value};session=${session?.value};session.sig=${sessionSig?.value}`,
      },
    });
    if (res.data.errors) {
      return { errors: res.data.errors, data: null };
    }
    return { isAuth: true, data: res.data.data };
  } catch (error: unknown) {
    throw error;
  }
};

async function getTeachersData({
  search_query,
}: {
  search_query: string;
}): Promise<{
  errors?: string;
  data: { teachers: ITeacher[]; detail: PageDetails } | null;
}> {
  try {
    const API_ENDPOINT = `http://localhost:3000/v1/teachers?pageSize=10&pageNumber=1&name=${search_query}`;
    const res = await axios.get(API_ENDPOINT);
    console.log(res)
    
    return { data: { teachers: res.data.data, detail: res.data.detail } };
  } catch (error: any) {
    if(error.response.status === 404){
      notFound()
    }
    throw error;
  }

}
  const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { isAuth, data } = await getUserData();

  const { search_query } = searchParams;
  console.log(search_query);
  const teachers = await getTeachersData({
    search_query: search_query as string ? search_query as string : '',
  });
  return (
    
      <div className="max-w-full grid gap-5">
        <div className="w-full flex justify-center items-center border shadow-sm">
          <Navbar authState={{ isAuth: isAuth!, user: data }} />
        </div>
        <TeacherList initialData={teachers} filter={searchParams} />
        <div className="w-full  flex justify-center items-start bg-black">
          <Footer />
        </div>
      </div>
  );
}

export default Page