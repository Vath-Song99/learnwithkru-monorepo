import { Typography } from "@/components/atoms";
import Link from "next/link";
import React from "react";
import { VerifyLogin } from "../auth/VerifyLogin";

const HomeBenner: React.FC = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full h-auto flex justify-center  py-14  bg-[#F6FAFC]  ${className}`} //list card
    >
      {/* Header */}
      <div className="w-full md:w-[80%]  grid grid-flow-row justify-center  gap-5 ">
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] grid  gap-5">
            <Typography
              className="capitalize sm:text-3xl"
              fontSize="md"
              variant="bold"
              colorscheme="secondary"
              align="center"
            >
              May i ask who <span className="text-[#7B2CBF]">you</span> are?
            </Typography>

            <Typography
              className=""
              fontSize="sm"
              colorscheme="secondary"
              variant="normal"
              align="center"
            >
              select one to show a right distination you what you want from our
              appication
            </Typography>
          </div>
        </div>

        {/* List card */}
        <div className="w-full md:w-full  h-auto flex justify-center md:justify-between   flex-wrap gap-8">
          {/* Card */}
          <div className="w-[80%] md:w-[45%] lg:w-[400px] h-auto  shadow-md border px-10 py-3 grid gap-5">
            <div className="flex items-center justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-[#9243D6] p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>

              <Typography
                className=""
                fontSize="lg"
                colorscheme="secondary"
                align="left"
                variant="bold"
              >
                Teacher
              </Typography>
            </div>
            <Typography
              className="hover:text-clip"
              fontSize="sm"
              colorscheme="secondary"
              align="left"
            >
              Through our platform, teachers will have access to a diverse range
              of resources, personalized learning opportunities, and a
              supportive community to enhance their teaching practices
            </Typography>

            <div className="w-full flex justify-end items-center">
              <VerifyLogin />
            </div>
          </div>

          <div className="w-[80%]  md:w-[45%] lg:w-[400px] h-auto  shadow-md border px-10 py-3 grid gap-5">
            <div className="flex items-center justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-[#E5E501] p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <Typography
                className=""
                fontSize="lg"
                colorscheme="secondary"
                align="left"
                variant="bold"
              >
                Student
              </Typography>
            </div>
            <Typography
              className="overflow-y-hidden hover:text-clip"
              fontSize="sm"
              colorscheme="secondary"
              align="left"
            >
              Through our platform, teachers will have access to a diverse range
              of resources, personalized learning opportunities, and a
              supportive community to enhance their teaching practices
            </Typography>

            <div className="w-full flex justify-end items-center">
              <VerifyLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeBenner };
