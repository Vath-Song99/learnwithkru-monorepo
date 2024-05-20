"use client";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import Image from "next/image";
import { Button, InputForm } from "@/components/atoms";
import { classRoom } from "@/@types/classromm";
import { createClassSchema } from "@/schema/createClassSchema";
import * as Yup from "yup";
import axios from "axios";
const DEFAULT_FORM_VALUE = {
  classroom: "",
  subject: "",
  email: "",
};
const CreateClass = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<classRoom>(DEFAULT_FORM_VALUE);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      await createClassSchema.validate(formData, { abortEarly: false });
      addClassRoom(formData);
      setErrors({});
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
  const addClassRoom = (users: classRoom) => {
    // stept 5
    alert(users.email);
    const fetchData = async (usersData: classRoom) => {
      try {
        const data = JSON.stringify(usersData);
        // const response = await axios.post(
        //   "http://localhost:3001/api/v1/auth/login",
        //   data,
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
      } catch (error) { }
    };
    // stept 6
    // stept 7
    fetchData(users);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto flex justify-evenly items-center lg:border-white-30 lg:border-2">
        <div className="hidden lg:block">
          <Image
            src="/createclass.png"
            alt="createclass"
            width={500}
            height={300}></Image>
        </div>
        <div className="flex md:[280px]  flex-col w-[350px]">
          <div className="flex flex-col justify-center items-center container ">
            <p className="font-bold text-2xl lg:text-3xl ">Create Classroom</p>
            <p className="text-xs tracking-tight w-[350px] h-[40px] mt-4 lg:text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
              molestiae repudiandae! Rem dicta commodi soluta reiciendis
              aspernatur minus. Aperiam, deserunt!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" mt-4 md:w-[200px] ">
              <label className=" w-[350px] flex flex-col justify-center items-center   ">
                <div className="flex flex-col">
                  <InputForm
                    className=" mt-4 bg-[#f1f1f1]   px-3  md:w-[350px] lg:w-[350px]  outline-none"
                    borderColor="border-class"
                    placeholder="ClassName"
                    borderSize="classroom"
                    name="classroom"
                    type="text"
                    onChange={onChangeInput}
                    value={formData.classroom}
                  />
                  {errors.classroom && (
                    <div className="flex justify-start">
                      <small className="mt-2" style={{ color: "red" }}>
                        {errors.classroom}
                      </small>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <InputForm
                    className=" mt-4 bg-[#f1f1f1]   px-3  md:w-[350px] lg:w-[350px]  outline-none"
                    borderColor="border-class"
                    placeholder="Subject"
                    borderSize="classroom"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={onChangeInput}
                  />
                  {errors.subject && (
                    <div className="flex justify-start">
                      <small className="mt-2" style={{ color: "red" }}>
                        {errors.subject}
                      </small>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <InputForm
                    className=" mt-4 bg-[#f1f1f1]   px-3  md:w-[350px] lg:w-[350px]  outline-none"
                    borderColor="border-class"
                    placeholder="Email Address"
                    borderSize="classroom"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={onChangeInput}
                  />
                  {errors.email && (
                    <div className="flex justify-start">
                      <small className="mt-2" style={{ color: "red" }}>
                        {errors.email}
                      </small>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="">
              <div className="flex justify-end mt-3 text-xs ">
                <a href="" className="underline">
                  Add your student+
                </a>
              </div>
              <div className="flex justify-center items-center">
                <Button className="w-[100px] h-[30px] text-white text-xs  md:w-[100px]  md:h-[30px]  mb-3 mt-4">
                  {" "}
                  Create Class
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { CreateClass };