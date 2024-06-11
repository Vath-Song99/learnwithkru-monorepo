"use client";
import { Button, InputForm, Typography } from "@/components/atoms";
import { PriceTeachers } from "@/schema/becomeTeacher";
import { BecomeTeacherFormTypes } from "./@types";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import * as Yup from "yup";
import {
  getLocalStorageTeacher,
  setLocalStorageTeacher,
} from "@/utils/localStorage";

const DEFAULT_FORM_VALUE = {
  priceTeacher: "",
};

interface PriceProps {
  priceTeacher: string;
}

const PricingForm = ({
  title,
  description,
  currentPage,
  pageIndex,
  setCurrentPage,
  setdataTutor,
  dataTutor,
}: BecomeTeacherFormTypes) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<PriceProps>(DEFAULT_FORM_VALUE);

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setLocalStorageTeacher("aboutPrice", formData);
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await PriceTeachers.validate(formData, { abortEarly: false });
      if (pageIndex !== undefined) {
        setCurrentPage((prevPage) =>
          Math.min(prevPage + 1, pageIndex.length - 1)
        );
      }
      const priceTeacher = parseInt(formData.priceTeacher);
      setdataTutor((prev: PriceProps) => ({
        ...prev,
        priceTeacher: priceTeacher,
      }));
      console.log("data submit", dataTutor);
      setLocalStorageTeacher("priceTeacher", formData);
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


  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  // Check if the users data is in local storage for the first render
  useEffect(() => {
    const userStorage = getLocalStorageTeacher("priceTeacher")
      ? getLocalStorageTeacher("priceTeacher")
      : [];
    setFormData(userStorage);
  }, []);
  return (
    <div className="flex flex-col w-[80%] justify-center items-center px-4 sm:w-[60%] md:w-[80%] lg:w-[60%] xl:w-[60%]">
      <div className="flex flex-col">
        <Typography align="left" fontSize="lg" variant="bold" className="py-4">
          {title}
        </Typography>
        <Typography align="left" fontSize="sm" className="py-2">
          {description}
        </Typography>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col">
            <div className="">
              <InputForm
                type="number"
                placeholder="Enter price"
                borderRadius="md"
                borderSize="md"
                className="border border-purple-500 outline-none text-xs w-full sm:w-[240px]"
                name="priceTeacher"
                value={formData.priceTeacher}
                onChange={onChangeInput}
              />
              {errors.priceTeacher && (
                <p className="text-red-500 text-xs">{errors.priceTeacher}</p>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex justify-start gap-4">
                {currentPage > 0 && (
                  <Button
                    onClick={handleBack}
                    radius="md"
                    className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  radius="md"
                  className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { PricingForm };