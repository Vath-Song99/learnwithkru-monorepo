import { Button, Typography } from "@/components/atoms";
import React from "react";
import Image from "next/image";

const SiderDashboard = () => {
  return (
    <>
      <aside className="w-[315px] h-screen rounded-lg shadow-lg">
        <div className="bg-[#F0F7FF] flex justify-between items-center px-10 py-5">
          <Image
            src={"/Logos/KruLogo.png"}
            height={500}
            width={500}
            alt="Kru Logo"
            className="w-[65px] h-[65px] rounded-full object-cover border-4 border-white"
          />
          <Typography>Learn with KRU</Typography>
        </div>

        <div className="flex flex-col items-center mt-20 gap-20">
          <Button radius="md" className="w-[200px] h-[45px] pl-5">
            <a href="#" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778v66.562z"
                />
                <path
                  fill="currentColor"
                  d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
                />
              </svg>
              <Typography className="ml-5" colorscheme="white">
                Teacher
              </Typography>
            </a>
          </Button>
          <Button radius="md" className="w-[200px] h-[45px] pl-5">
            <a href="#" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120Zm-48-32.43L57.3 64L128 40.43L198.7 64Z"
                />
              </svg>
              <Typography className="ml-5" colorscheme="white">
                Student
              </Typography>
            </a>
          </Button>
        </div>
      </aside>
    </>
  );
};

export { SiderDashboard };
