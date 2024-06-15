import axios from "axios";
import {SideNav} from "../../components/organisms/dashboard/sidenav";
import { getCookieString } from "@/utils/getCookieString";
const getUserData = async (): Promise<any> => {
  const cookieString = getCookieString();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_LOCAL || "http://localhost:3000";
  console.log(apiUrl)
  try {
    if (typeof cookieString === "object") {
      return cookieString;
    }
    const res = await axios.get(`${apiUrl}/v1/teachers` , {

      withCredentials: true,
      headers: { Cookie: cookieString as string },
    });
    
    if (res.data.errors) {
      return { errors: res.data.errors, data: null };
    }
    return { isAuth: true, data: res.data.data };

  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error details:", error.response?.data);
    }

    throw error;
  }
};


export default async function Layout({ children }: { children: React.ReactNode }) {
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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
