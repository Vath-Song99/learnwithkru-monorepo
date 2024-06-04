import { Homepage, Navbar } from "@/components";
import axios from "axios";
import { cookies } from "next/headers";

const getUserData = async () => {
  "use server";
  try {
    const cookiesStore = cookies();
    const cookiesData = cookiesStore.getAll();
    console.log("Cookies: ", cookiesData);

    const res = await axios.get("http://localhost:3000/v1/users/user-profile", {
      headers: {
        Cookie: `${cookiesData[0].name}=${cookiesData[0].value};${cookiesData[1].name}=${cookiesData[1].value};${cookiesData[2].name}=${cookiesData[2].value}`,
      },
    });
    // if (res.data.data) {
    //   throw new Error(res.data.data);
    // }
    return res.data;
  } catch (error: unknown) {
    throw error;
  }
};
const Page = async () => {
  const data = await getUserData();

  if (!data) {
    return (
      <div className="w-full flex justify-center pt-10">
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-9 w-9 borderinvoked-t-4 border-[#7B2CBF]"></div>
        </div>
      </div>
    ); // Render loading state
  }
  const authState = {
    isAuth: !!data,
    user: data,
  };

  console.log("Thi is auth state: ", authState);
  return (
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar authState={authState} />
      </div>
      <Homepage isAuth={authState.isAuth} />
      <div className="w-full flex justify-center items-start bg-gray-900"></div>
    </div>
  );
};

export default Page;
