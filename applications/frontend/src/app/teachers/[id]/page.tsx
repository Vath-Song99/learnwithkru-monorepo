
import { ITeacher } from "@/@types/teacher.type";
import { IUser } from "@/@types/user";
import { TeachersProfile, Footer } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import { Navbar } from "@nextui-org/react";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

interface IAuth {
    isAuth?: boolean;
    errors?: string;
    data: IUser | null;
}

const getUserData = async (): Promise<IAuth> => {
    try {
        const cookieStringOrAuth = getCookieString();

        if (typeof cookieStringOrAuth === "object") {
            return cookieStringOrAuth;
        }

        const res = await axios.get("http://localhost:3000/v1/users", {
            withCredentials: true,
            headers: { Cookie: cookieStringOrAuth },
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
interface ITeacherData {
    errors?: string;
    data: ITeacher | null;
}
async function getTeachersData(_id: string): Promise<ITeacherData> {
    try {   
        const cookieStringOrAuth = getCookieString();

        if (typeof cookieStringOrAuth === "object") {
            return { errors: "Not authenticated", data: null };
        }

        const API_ENDPOINT = `http://localhost:3000/v1/teachers/${_id}`;
        const res = await axios.get(API_ENDPOINT, {
            withCredentials: true,
            headers: { Cookie: cookieStringOrAuth },
        });

        if (res.data.errors) {
            return { errors: res.data.errors, data: null };
        }

        return { data: res.data.data};
    } catch (error: any) {
        throw error;
    }
}

const Page = async ({ params }: { params: { id: string } }) => {
    const { isAuth, data } = await getUserData();
    const userId = params.id as string;

    const teachersResponse = await getTeachersData(userId);

    if (!teachersResponse?.data) {
        notFound();
    }

    const selectedTeacher = teachersResponse?.data;

    return (
        <div className="">
            <div className="w-full flex justify-center items-center border shadow-sm">
                <Navbar authState={{ isAuth: isAuth ?? false, user: data }} />
            </div>
            <div className="flex justify-center items-start">
                <TeachersProfile teacher={selectedTeacher as ITeacher} />
            </div>
            <div className="w-full flex justify-center items-start bg-black">
                <Footer />
            </div>
        </div>
    );
};

export default Page;
