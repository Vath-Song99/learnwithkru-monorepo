// /* eslint-disable react/jsx-no-duplicate-props */
// "use client";

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Page = ({
//   params,
// }: {
//   params: {
//     id: string;
//   };
// }) => {
//   const [isShowModal, setIsShowModal] = useState<boolean>(false);
//   const [authState, setAuthState] = useState<{ isAuth: boolean; user: any }>({
//     isAuth: false,
//     user: null,
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const { id } = params;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = "http://localhost:3000/v1/users/user-profile";
//         const data = await handleUserProfile(url);
//         console.log("User profile data:", data);
//         if (!data.data) {
//           console.log("User not found!", data.data);
//         }
//         setAuthState({
//           isAuth: true,
//           user: data.data,
//         });
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (id) {
//       fetchData();
//     }
//   }, [id]);

//   const handleUserProfile = async (url: string): Promise<any> => {
//     try {
//       const response = await axios.get(url, { withCredentials: true });
//       if (response.data.errors) {
//         console.log("An error occurred:", response.data.errors);
//       }
//       return response.data;
//     } catch (error: unknown) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="w-full flex justify-center pt-10">
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-[#7B2CBF]"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-full h-[200vh]">
//       <div className="w-full flex justify-center items-center">
// <<<<<<< HEAD:application/frontend/src/app/teacher-profile/[id]/page.tsx
//         <Navbar
//           setIsShowModal={setIsShowModal}
//           isShowModal={isShowModal}
//           authState={authState}
//         />
// =======
//         <Navbar  authState={authState} />
// >>>>>>> 1f71c7e764a631c1eb810af1d931f609df689730:application/frontend/src/app/teacher-profile/page.tsx
//       </div>
//       <div className="w-full flex justify-center">
//         <TeachersProfile teacherId={id as string} />
//       </div>
//       <div className="w-full flex justify-center items-start bg-gray-900 mt-10">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Page;
