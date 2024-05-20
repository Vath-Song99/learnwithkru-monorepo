"use client";
import { Button, FormSignup } from "@/components";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSigninWithGoogle = async () => {
    try {
      const url = "http://localhost:3000/v1/auth/google";
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // Axios error (e.g., network error, timeout)
        console.error("Axios error:", error.message);
      } else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server error:", error.response.data);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
      }
      throw error; // Re-throw the error to be handled by the caller if needed
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center  mx-auto">
      <div className="border-[1px] border-[#f3f3f3]-500  pt-4 pb-8 px-8 flex items-center justify-center shadow-md">
        <div className="grid gap-3">
          <div className="flex flex-col  gap-2 ">
            <h1 className="text-3xl font-medium ">Sign up with Kru</h1>
            <p className="underline text-xs">
              Sign up as a teacher?{"  "}
              <Link
                href={"/signup"}
                className="text-[#7b2cbf] underline hover:text-purple-700"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <Button
              onClick={handleSigninWithGoogle}
              className="flex items-center justify-center  w-[360px] py-2.5  bg-[#f3f3f3] rounded-md hover:bg-[#d2d0d0]"
            >
              <div className="w-[80%] flex justify-evenly items-center gap-x-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9.81836V14.4656H18.4582C18.1746 15.9602 17.3236 17.2257 16.0472 18.0766L19.9417 21.0984C22.2108 19.0039 23.5199 15.9276 23.5199 12.273C23.5199 11.4221 23.4436 10.6039 23.3017 9.81849L12 9.81836Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.27461 14.2842L4.39625 14.9566L1.28711 17.3783C3.26165 21.2947 7.30862 24.0002 11.9995 24.0002C15.2394 24.0002 17.9557 22.9311 19.9412 21.0984L16.0467 18.0765C14.9776 18.7965 13.614 19.2329 11.9995 19.2329C8.87951 19.2329 6.22868 17.1275 5.27952 14.2911L5.27461 14.2842Z"
                    fill="#34A853"
                  />
                  <path
                    d="M1.28718 6.62158C0.469042 8.23606 0 10.0579 0 11.9997C0 13.9415 0.469042 15.7633 1.28718 17.3778C1.28718 17.3886 5.27997 14.2796 5.27997 14.2796C5.03998 13.5596 4.89812 12.796 4.89812 11.9996C4.89812 11.2031 5.03998 10.4395 5.27997 9.71951L1.28718 6.62158Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M11.9997 4.77818C13.767 4.77818 15.3379 5.38907 16.5925 6.56727L20.0288 3.13095C17.9452 1.18917 15.2398 0 11.9997 0C7.30887 0 3.26165 2.69454 1.28711 6.62183L5.27978 9.72001C6.22882 6.88362 8.87976 4.77818 11.9997 4.77818Z"
                    fill="#EA4335"
                  />
                </svg>

                <p className="text-sm text-slate-950  ">Continue with Google</p>
              </div>
            </Button>
            <Button className="flex items-center  justify-center w-[360px] py-2.5   bg-[#f3f3f3] rounded-md  hover:bg-[#d2d0d0] ">
              <div className="w-[80%] flex justify-evenly  items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2243_1312)">
                    <path
                      d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z"
                      fill="#0866FF"
                    />
                    <path
                      d="M16.7002 15.6672L17.3737 12H13.454V10.703C13.454 8.76526 14.2143 8.01982 16.1818 8.01982C16.7929 8.01982 17.2849 8.0347 17.5681 8.06446V4.74046C17.0314 4.59118 15.7196 4.44238 14.9593 4.44238C10.9493 4.44238 9.10087 6.3355 9.10087 10.4198V12H6.62646V15.6672H9.10087V23.6467C10.0292 23.8771 11.0002 24 11.9996 24C12.4916 24 12.9769 23.9697 13.4535 23.9121V15.6672H16.6997H16.7002Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2243_1312">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-sm text-slate-950 ">
                  Continue with Facebook
                </p>
              </div>
            </Button>
            <div className="w-full flex items-center  justify-evenly">
              <div className="border-t border-black w-[40%] "></div>
              <div className=" text-black px-5">or</div>
              <div className="border-t border-black w-[40%] "></div>
            </div>
            <div className="">
              <FormSignup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
