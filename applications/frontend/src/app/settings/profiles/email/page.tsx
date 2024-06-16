
import { IAuth } from "@/@types/auth";
import { Sidenavsub } from "@/components/organisms/dashboard";
import EmailUser from "@/components/organisms/dashboard/EmailUser";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";

const getUserData = async (): Promise<IAuth> => {
  const cookieString = getCookieString();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD || "https://api.learnwithkru.com";
  console.log(apiUrl)
  try {
    if (typeof cookieString === "object") {
      return cookieString;
    }
    const res = await axios.get(`${apiUrl}/v1/users` , {

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
const EmployerProfile: React.FC = async () => {
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
    
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 px-10 py-5">
    <div className="flex flex-row">
      <Sidenavsub />
      </div>
 <div className="flex flex-col">
  <EmailUser authState={{ isAuth: isAuth as boolean, user: data }} />
 </div>
    
      </div>
    </>
  );
};

export default EmployerProfile;
