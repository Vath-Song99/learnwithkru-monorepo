"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { Button, InputForm, Typography } from "@/components/atoms";
import Link from "next/link";

// SVG Icon components
const SignupToBecomeStudent = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[150vh] flex xl:justify-between justify-center items-center xl:gap-20">
                <div className="w-[80%] md:w-full lg:w-[35%] grid lg:grid-flow-row gap-4">
                    <Typography align="left" fontSize="2xl" variant="2-extrabold">
                        Student Form
                    </Typography>
                    <Typography align="left" className="text-nowrap">
                        You must fill out all the form conditions to become a student in our community.
                    </Typography>

                    <form
                        className=" w-[120px] lg:w-full lg:grid lg:grid-flow-row lg:gap-3 ml-10 md:gap-3 sm:gap-3 "
                        action="/submit-form"
                    >
                        <div>
                            <Typography className="flex justify-start text-nowrap">
                                Enter your school name
                            </Typography>
                            <InputForm
                                type="text"
                                placeholder="SchoolName"
                                borderColor="primary"
                                borderSize="lg"
                                borderRadius="md"
                                className="w-[120px] border border-[#445455]  outline-none"
                            />
                        </div>
                        <div>
                            <Typography className="flex justify-start text-nowrap">
                                Fill Your Student Card
                            </Typography>
                            <InputForm
                                type="file"
                                placeholder="Studenet Card"
                                borderColor="black"
                                paddingY="xl"
                                borderSize="lg"
                                borderRadius="md"
                                className="w-[120px] border border-[#445455]  outline-none"
                            />
                        </div>
                        <div>
                            <Typography className="flex justify-start text-nowrap">
                                What Grade do you Study?
                            </Typography>
                            <InputForm
                                type="password"
                                placeholder="password"
                                borderColor="primary"
                                borderSize="lg"
                                borderRadius="md"
                                className="w-[120px] border border-[#445455]  outline-none"
                            />
                        </div>
                        <div>
                            <Typography className="flex justify-start ">BIO</Typography>
                            <InputForm
                                type="text"
                                placeholder="Add text"
                                borderColor="primary"
                                borderSize="lg"
                                borderRadius="md"
                                className=" w-[100px] h-[300px]  border border-[#445455] outline-none"
                            />
                        </div>
                        <Button
                            colorScheme="primary"
                            fontColor="white"
                            fontSize="lg"
                            className="py-[8px] max-w-md sm:w-[120px] md:py-2 mt-4 h-12 text-sm"
                        >
                            <Link href="/teacher-list">Submit</Link>
                        </Button>
                    </form>
                </div>
                <Image
                    className="w-[100%] hidden xl:block"
                    src={"Profiles/studentform.png"} // Fix typo here
                    alt="Sign up to become a teacher"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default SignupToBecomeStudent;
