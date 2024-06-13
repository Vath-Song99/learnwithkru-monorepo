import { IUser } from "@/@types/user";
import { Homepage, Navbar } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";


const getUserData = async (): Promise<{
  isAuth?: boolean;
  errors?: string;
  data: IUser | null;
}> => {
  const cookieString = getCookieString();
  try {
    
    if(typeof cookieString === 'object'){
      return cookieString
    }
    const res = await axios.get("https://localhost:3000/v1/users", {
      withCredentials: true,
      headers: { Cookie: cookieString as string},
    });
    
    if (res.data.errors) {
      return { errors: res.data.errors, data: null };
    }

    return { isAuth: true, data: res.data.data };
  } catch (error: unknown) {
    console.log("Home error",error)
    throw error;
  }
};

const Page = async () => {
  const { isAuth, errors, data } = await getUserData();

  if (errors) {
    <div className="w-full flex justify-center pt-10">
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="">{errors}</h1>
      </div>
    </div>;
  }

  return (
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar authState={{ isAuth: isAuth as boolean, user: data }} />
      </div>
      <Homepage isAuth={isAuth!} />
      <div className="w-full flex justify-center items-start bg-gray-900"></div>
    </div>
  );
};

export default Page;
