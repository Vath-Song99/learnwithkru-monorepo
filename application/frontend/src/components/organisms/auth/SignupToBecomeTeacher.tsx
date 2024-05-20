"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { Button, InputForm, Typography } from "@/components/atoms";
import Link from "next/link";

// SVG Icon components
const GoogleIcon = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG Path for Google Icon */}
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG Path for Facebook Icon */}
  </svg>
);

const SignupToBecomeTeacher = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[150vh] flex xl:justify-between justify-center items-center xl:gap-20">
        <div className="w-[80%] md:w-full lg:w-[35%] grid lg:grid-flow-row gap-4">
          <Typography align="left" fontSize="lg" variant="bold">
            Sign up to become a teacher now
          </Typography>
          <Typography align="left">
            You must fill out all the form conditions to become a teacher in our community.
          </Typography>

          <form className="w-full lg:w-full lg:grid lg:grid-flow-row lg:gap-4 " action="/submit-form">
            <div>
              <Typography className="flex justify-start">Email</Typography>
              <InputForm
                type="text"
                placeholder="example@gmail.com"
                borderColor="primary"
                className="w-full outline-none"
              />
            </div>
            <div>
              <Typography className="flex justify-start">Password</Typography>
              <InputForm
                type="password"
                placeholder="password"
                borderColor="primary"
                className="w-full outline-none"
              />
            </div>
            <Button
              colorScheme="primary"
              fontColor="white"
              fontSize="lg"
              className="py-[8px] md:py-2 w-full mt-4 text-sm"
            >
              <Link href="/become-a-teacher-signup-steps">Signup</Link>
            </Button>
          </form>
          <div className="w-full flex items-center justify-between">
            <div className="border-black border-b w-[40%]"></div>
            <Typography>or</Typography>
            <div className="border-black border-b w-[40%]"></div>
          </div>

          <div className="w-full grid items-center grid-flow-row gap-4">
            <Button
              className="grid justify-center items-center grid-flow-col gap-5 text-sm max-[640px]:text-md py-[9px]"
              leftIcon={<GoogleIcon />}
              colorScheme="tertiary"
              fontColor="black"
              fontSize="lg"
            >
              Continue with Google
            </Button>
            <Button
              className="grid justify-center items-center grid-flow-col gap-x-1 text-sm py-[9px]"
              leftIcon={<FacebookIcon />}
              colorScheme="tertiary"
              fontColor="black"
              fontSize="lg"
            >
              Continue with Facebook
            </Button>
          </div>
        </div>
        <Image
          className="w-[100%] hidden xl:block"
          src={"/BEnner/teacher-signup.png"} // Fix typo here
          alt="Sign up to become a teacher"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SignupToBecomeTeacher;
