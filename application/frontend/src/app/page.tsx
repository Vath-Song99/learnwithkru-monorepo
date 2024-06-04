import { Homepage, Navbar } from "@/components";
import axios from "axios";

const getUserData = async () => {
  try {
    const res = await axios.get("http://localhost:3000/v1/users/user-profile", {
      withCredentials: true,
    });
    if (res.data.data) {
      throw new Error(res.data.data);
    }
    return res.data;
  } catch (error: unknown) {
    throw error;
  }
};
const Page = () => {
  const data = getUserData();

  if (!data) {
    return (
      <div className="w-full flex justify-center pt-10">
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-[#7B2CBF]"></div>
        </div>
      </div>
    ); // Render loading state
  }

  const authState = {
    isAuth: true,
    user: data,
  };
  return (
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar authState={authState} />
      </div>
      <Homepage />
      <div className="w-full flex justify-center items-start bg-gray-900"></div>
    </div>
  );
};

export default Page;
