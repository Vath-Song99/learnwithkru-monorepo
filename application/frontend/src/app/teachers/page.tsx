import { ITeacher } from "@/@types/teacher.type";
import { Footer, Navbar, TeacherList } from "@/components";
import axios from "axios";

async function getUserData() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/v1/users/user-profile",
      { withCredentials: true }
    );
    if (data.errors) {
      throw new Error(data.errors);
    }
    return data.data;
  } catch (error: unknown) {
    throw error;
  }
}

async function getTeachersData() {
  try {
    const API_ENDPOINT = `http://localhost:3000/v1/teachers/teacher-list?pageSize=10&pageNumber=1`;
    const { data } = await axios.get(API_ENDPOINT, { withCredentials: true });
    // const { totalPages, totalTeachers, currentPage } = response.data.detail;
    if (!Array.isArray(data.data)) {
      throw new Error("No teacher found!");
    }

    return { data: data.data, detail: data.detail };
  } catch (error: unknown) {
    throw error;
  }
}

export default async function Page() {
  const user = await getUserData();
  const teachers = getTeachersData();
  const authState = {
    isAuth: true,
    user: user,
  };
  //   const teacherData = {
  //     data: teachers.data,
  //     detail: teachers.detail
  //   }

  console.log(user, teachers);
  return (
    <div className="max-w-full grid gap-5">
      <div className="w-full flex justify-center items-center border shadow-sm">
        <Navbar authState={authState} />
      </div>
      <TeacherList initialData={teachers} />
      <div className="w-full  flex justify-center items-start bg-black">
        <Footer />
      </div>
    </div>
  );
}
