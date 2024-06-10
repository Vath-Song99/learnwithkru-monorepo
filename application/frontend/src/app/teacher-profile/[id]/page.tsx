import { ITeacher, PageDetails } from "@/@types/teacher.type";
import { IUser } from "@/@types/user";
import { Footer, Navbar, TeachersProfile } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
import { notFound } from "next/navigation";

const getUserData = async (): Promise<{
    isAuth?: boolean;
    errors?: string;
    data: IUser | null;
}> => {
    try {
        const cookieString = getCookieString();
        if (typeof cookieString === "object") {
            return cookieString;
        }
        const res = await axios.get("http://localhost:3000/v1/users", {
            withCredentials: true,
            headers: { Cookie: cookieString as string },
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

async function getTeachersData(userId: string): Promise<{
    errors?: string;
    data: { teachers: ITeacher[]; detail: PageDetails } | null;
}> {
    try {
        const API_ENDPOINT = `http://localhost:3000/v1/teachers?id=${userId}`;
        const res = await axios.get(API_ENDPOINT);

        return { data: { teachers: res.data.data, detail: res.data.detail } };
    } catch (error: any) {
        console.error("Error fetching teachers data:", error.response.status);

        if (error.response) {
            const { status } = error.response;

            if (status === 404 || status === 401) {
                notFound();
            }

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
    const userId = searchParams._id as string; // Replace "desired_teacher_id" with the ID of the teacher you want to select

    const teachers = await getTeachersData(userId);
    const selectedTeacher = teachers?.data?.teachers[0]; // Assuming the first teacher in the array corresponds to the selected teacher

    if (selectedTeacher) {
        return (
            <div className="">
                <div className="w-full flex justify-center items-center border shadow-sm">
                    <Navbar authState={{ isAuth: isAuth ?? false, user: data }} />
                </div>
                <div className=" flex justify-center  items-start">
                    <TeachersProfile teacher={selectedTeacher} />
                </div>
                <div className="w-full flex justify-center items-start bg-black">
                    <Footer />
                </div>
            </div>
        );
    } else {
        // Handle case when selected teacher is not found
        return (
            <div>
                <p>Teacher not found</p>
            </div>
        );
    }
};

export default Page;
