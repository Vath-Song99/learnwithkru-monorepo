"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { Button, InputForm, Typography } from "@/components/atoms";
import Link from "next/link";
import * as Yup from "yup";
import { studentSchema } from "../../../schema/studentForm";
import axios from "axios";

interface Student {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
    school_name: string;
    education: string;
    grade: string;
    student_card: string;
}

interface FormValues {
    schoolName: string;
    studentCard: string ;
    grade: string;
    bio: string;
}

const SignupToBecomeStudent = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [previewURL, setPreviewURL] = useState<string | null>(null);

    const [validate, setValidate] = useState<FormValues>({
        schoolName: "",
        studentCard: "",
        grade: "",
        bio: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    // Student Fetching

    const handlePostStudent = async (formData: FormValues) => {
        try {
            const API_ENDPOINT = "http://localhost:3000/v1/students/become-student"; // Replace with your actual API endpoint
            const response = await axios.post(API_ENDPOINT,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            if (response.data.errors) {
                console.log("An error accor: ", response.data.errors)
                return false
            }
            console.log(response.data);
            setValidate(response.data.data);
        } catch (error) {
            console.error('Error occurred during fetch Student Data:', error);

        };
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValidate({ ...validate, [name]: value });
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        try {
            await studentSchema.validate(validate, { abortEarly: false });
            await handlePostStudent(validate); setErrors({});
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const newErrors: { [key: string]: string } = {};
                error.inner.forEach((e) => {
                    if (e.path) {
                        newErrors[e.path] = e.message;
                    }
                });
                setErrors(newErrors);
            }
        }
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (!selectedFile.type.startsWith("image/")) {
                alert("Please select an image file");
            } else if (selectedFile.size > 2 * 1024 * 1024) {
                alert("The file size shou   ld be less than 2MB");
            } else {
                const reader = new FileReader();
                reader.onload = () => {
                    setImage(selectedFile);
                    setImageUrl(URL.createObjectURL(selectedFile));
                    setPreviewURL(reader.result as string);
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    };

    return (
        <div className="flex flex-col justify-between items-center h-screen">
            <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[150vh] flex xl:justify-between lg:justify-center justify-start items-center xl:gap-20">
                <div className="w-[80%] md:w-full lg:w-[35%] grid lg:grid-flow-row gap-2 mt-2">
                    <Typography
                        align="left"
                        fontSize="xl"
                        variant="2-extrabold"
                        className="md:text-[30px] lg:text-[40px] flex justify-center"
                    >
                        Student Form
                    </Typography>
                    <Typography
                        fontSize="sm"
                        variant="normal"
                        className="text-sm lg:text-nowrap w-[390px]"
                    >
                        You must fill out all the form conditions to become a student in our
                        community.
                    </Typography>

                    <form
                        autoComplete="off" noValidate onSubmit={handleSubmit}
                        className="w-[120px] lg:w-full lg:grid lg:grid-flow-row lg:gap-3 ml-10 md:gap-3 sm:gap-3 mt-5"
                    >
                        <div>
                            <Typography className="flex justify-start text-nowrap">
                                Enter your school name
                            </Typography>
                            <InputForm
                                type="text"
                                placeholder="School Name"
                                borderColor="secondary"
                                borderRadius="md"
                                name="schoolName"
                                className="border border-[#445455] outline-none w-[300px] h-16 md:w-[350px] sm:w-[350px] lg:w-[500px]"
                                value={validate.schoolName}
                                onChange={handleChange}
                            />
                            {errors.schoolName && (
                                <p className="text-red-500 text-nowrap">{errors.schoolName}</p>
                            )}
                        </div>
                        <div>
                            <Typography className="flex justify-start text-nowrap">
                                Fill Your Student Card
                            </Typography>
                            <InputForm
                                type="file"
                                placeholder="Student Card"
                                borderColor="secondary"
                                borderRadius="md"
                                paddingY="sm"
                                onChange={handleFileInputChange}
                                className="border border-[#445455] outline-none w-[300px] h-16 md:w-[350px] sm:w-[350px] lg:w-[500px]"
                            />
                            {image && (
                                <div>
                                    <h3>Uploaded Image:</h3>
<<<<<<< HEAD
                                    <img
                                        src={imageUrl}
                                        alt="Uploaded Preview"
                                        style={{ width: "300px", height: "auto" }}
                                    />
=======
                                    <Image src={imageUrl} alt="Uploaded Preview" style={{ width: '300px', height: 'auto' }} />
>>>>>>> eb827c4017bdf142022b229d4fdbfd726bb618ea
                                </div>
                            )}
                        </div>
                        <div>
                            <Typography className="flex justify-start text-nowrap">
                                What Grade do you Study?
                            </Typography>
                            <InputForm
                                type="number"
                                placeholder="Input your Grade"
                                borderColor="secondary"
                                borderRadius="md"
                                name="grade"
                                value={validate.grade}
                                onChange={handleChange}
                                className="w-[300px] h-16 md:w-[350px] sm:w-[350px] lg:w-[500px] border border-[#445455] outline-none"
                            />
                            {errors.grade && (
                                <p className="text-red-500  text-nowrap">{errors.grade}</p>
                            )}
                        </div>
                        <div>
                            <Typography className="flex justify-start">BIO</Typography>
                            <textarea
                                name="bio"
                                placeholder="Add text"
                                value={validate.bio}
                                onChange={handleChange}
                                className="w-[330px] md:w-[350px] sm:w-[350px] lg:w-[500px] h-52 rounded-lg border border-[#445455] outline-none p-3"
                            />
                            {errors.bio && (
                                <p className="text-red-500  text-nowrap">{errors.bio}</p>
                            )}
                        </div>
                        <div className="w-[330px] md:w-[350px] sm:w-[350px] lg:w-[500px] flex justify-center md:justify-center lg:justify-start">
                            <Button
                                colorScheme="primary"
                                fontColor="white"
                                radius="md"
                                type="submit"
                                className="py-[8px] md:py-2 mt-4 w-[150px] h-12 text-sm sm:justify-center sm:w-[350px] md:w-[350px] lg:w-[500px]"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
                <Image
                    className="hidden xl:block lg:w-[100%]"
                    src={"Profiles/studentform.png"}
                    alt="Sign up to become a student"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default SignupToBecomeStudent
