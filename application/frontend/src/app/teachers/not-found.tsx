import { IUser } from "@/@types/user";
import {
  FilterTeachers,
  Footer,
  Navbar,
  SearchInput,
  Typography,
} from "@/components";
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
export default async function NotFound() {
  const { isAuth, data } = await getUserData();
  return (
    <div className="max-w-full grid gap-5">
      <div className="w-full flex justify-center items-center border shadow-sm">
        <Navbar authState={{ isAuth: isAuth!, user: data }} />
      </div>

      <div className="w-[80%] mx-auto">
        <Typography align="left" variant="bold" fontSize="lg">
          See your future teacher
        </Typography>
      </div>
      <SearchInput />
      <FilterTeachers />
      <div className="flex justify-center items-center py-10">
          <h1 className="text-gray-700">Teacher not found 404!</h1>
      </div>
      <div className="w-full  flex justify-center items-start bg-black">
        <Footer />
      </div>
    </div>
  );
}
