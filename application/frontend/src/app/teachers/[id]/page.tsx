import { ITeacher } from "@/@types/teacher.type";
import { IUser } from "@/@types/user";
import { Footer, Navbar, TeachersProfile } from "@/components";
import { getCookieString } from "@/utils/getCookieString";
import axios from "axios";
import { notFound } from "next/navigation";
// import { notFound } from "next/navigation";
import React from "react";

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

async function getTeachersData(_id: string): Promise<{
    errors?: string;
    data: { teachers: ITeacher; } | null;
}> {
    try {
        const cookieString = getCookieString();
        if (typeof cookieString === "object") {
            return cookieString;
        }
        const API_ENDPOINT = `http://localhost:3000/v1/teachers/${_id}`;
        const res = await axios.get(API_ENDPOINT, {
            withCredentials: true,
            headers: { Cookie: cookieString as string },
        });

        return { data: { teachers: res.data?.data } };
    } catch (error: any) {
        // console.error("Error fetching teachers data:", error.response.status);

        // if (error.response) {
        //     const { status } = error.response;

        //     if (status === 404 || status === 401) {
        //         notFound();
        //     }
        // }
        throw error;
    }
}

const Page = async ({ params }: {
    params: { id: string }
}) => {
    const { isAuth, data } = await getUserData();
    const userId = params.id as string; // Replace "desired_teacher_id" with the ID of the teacher you want to select

    const teachers = await getTeachersData(userId);

    console.log(teachers)
    if (!teachers) {
        notFound()  
    }
    const selectedTeacher = teachers?.data?.teachers// Assuming the first teacher in the array corresponds to the selected teacher

    console.log("Teacher here :", selectedTeacher)
    return (
        <div className="">
            <div className="w-full flex justify-center items-center border shadow-sm">
                <Navbar authState={{ isAuth: isAuth ?? false, user: data }} />
            </div>
            <div className=" flex justify-center  items-start">
                <TeachersProfile teacher={selectedTeacher as ITeacher} />
            </div>
            <div className="w-full flex justify-center items-start bg-black">
                <Footer />
            </div>
        </div>
    );

};

export default Page;














// import React from 'react'

// const page = async ({ params }: { params: { id: string } }) => {
//     return (
//         <div>{params.id}</div>
//     )
// }

// export default page