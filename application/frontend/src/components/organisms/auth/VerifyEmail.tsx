import { Button, Typography } from "@/components/atoms";
import Image from "next/image";
import React from "react";

const VerifyEmail = () => {
  return (
    <>
      <div className="flex flex-col mx-auto mt-10 w-[300px] h-[350px] shadow-lg rounded-lg justify-center items-center gap-4">
        <Image
          src={"/verify-email.png"}
          width={500}
          height={500}
          alt="Smoeury Songvat profile"
          className="w-[90px] h-[90px] rounded-full object-cover border-4 border-white"
        ></Image>
        <Typography>
          We need to verify your email. We've already sent out of the
          verfication link. Please check it and confirm it's really for you.
        </Typography>
        <Button
          radius="md"
          className="w-[130px] h-[35px]"
          colorScheme="secondary"
        >
          Home
        </Button>
      </div>
    </>
  );
};

export { VerifyEmail };
