import { IUser } from "@/@types/user";
import { Homepage, Navbar } from "@/components";
import axios from "axios";
import { cookies } from "next/headers";

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
