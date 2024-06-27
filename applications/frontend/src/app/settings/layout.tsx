import { IAuth } from "@/@types/auth";
import { Navbar } from "@/components";
import DefaultLayout from "@/components/organisms/dashboard/DefaultLayout";
import { handleAxiosError } from "@/utils/axiosErrorhandler";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";

const getUserData = async (): Promise<IAuth> => {
  const cookieString = getCookieString();
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://api.learnwithkru.com";
  try {
    if (typeof cookieString === "object") {
      return cookieString;
    }
    const res = await axios.get(`${apiUrl}/v1/users`, {
      withCredentials: true,
      headers: { Cookie: cookieString as string },
    });

    return { isAuth: true, data: res.data.data };
  } catch (error: unknown) {
    handleAxiosError(error, {
      handleErrorResponse: (response) => {
        const { errors } = response.data;

        if (errors) {
          return { isAuth: false, errors: errors?.message, data: null };
        }
      },
    });
    throw error;
  }
};

async function SettingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
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
    <DefaultLayout key={1}>
      <div className="w-full flex justify-end">
        <Navbar
          authState={{ isAuth: isAuth as boolean, user: data }}
          className="w-[90%]"
        />
      </div>
      <section className="w-full ">
        {/* Include shared UI here e.g. a header or sidebar */}

        {children}
      </section>
    </DefaultLayout>
  );
}

export default SettingLayout;
