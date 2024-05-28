"use client";
import React, { ChangeEvent, useState } from "react";
import { Image } from "@nextui-org/react";
import { Button, InputForm, Typography } from "@/components/atoms";
import Link from "next/link";
import * as Yup from "yup";
import { studentSchema } from '../../../schema/studentForm';

const SignupToBecomeStudent = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [previewURL, setPreviewURL] = useState<string | null>(null);

    const [validate, setValidate] = useState({
        schoolName: "",
        studentCard: undefined, // Assuming StudentCard is a file input, you can initialize it to undefined
        grade: "",
        bio: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValidate({ ...validate, [name]: value });
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement | HTMLTextAreaElement> = async (event) => {
        event.preventDefault();
        try {
            await studentSchema.validate(validate, { abortEarly: false });
            // Handle form submission
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
            if (!selectedFile.type.startsWith('image/')) {
                alert("Please select an image file");
            } else if (selectedFile.size > 2 * 1024 * 1024) {
                alert("The file size should be less than 2MB");
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
                    <Typography align="left" fontSize="xl" variant="2-extrabold" className="md:text-[30px] lg:text-[40px] flex justify-center">
                        Student Form
                    </Typography>
                    <Typography fontSize="sm" variant="normal" className="text-sm lg:text-nowrap w-[390px]">
                        You must fill out all the form conditions to become a student in our community.
                    </Typography>

                    <form
                        onSubmit={handleSubmit}
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
                            {errors.schoolName && <p className="text-red-500 text-nowrap">{errors.schoolName}</p>}
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
                                    <img src={imageUrl} alt="Uploaded Preview" style={{ width: '300px', height: 'auto' }} />
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
                            {errors.grade && <p className="text-red-500  text-nowrap">{errors.grade}</p>}
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
                            {errors.bio && <p className="text-red-500  text-nowrap">{errors.bio}</p>}
                        </div>
                        <div className="w-[330px] md:w-[350px] sm:w-[350px] lg:w-[500px] flex justify-center md:justify-center lg:justify-start">
                            <Button
                                colorScheme="primary"
                                fontColor="white"
                                radius="md"
                                className="py-[8px] md:py-2 mt-4 w-[150px] h-12 text-sm sm:justify-center sm:w-[350px] md:w-[350px] lg:w-[500px]"
                            >
                                <Link href="">Submit</Link>
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

export default SignupToBecomeStudent;
