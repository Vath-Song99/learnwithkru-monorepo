"use client";
import { ITeacher } from "@/@types/teacher.type";
import { Button, InputForm, Typography } from "@/components/atoms";
import { PriceTeachers } from "@/schema/becomeTeacher";
import React, {
  ChangeEvent,
  FC,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import * as Yup from "yup";

interface PriceProps {
  price: string | number;
  
}
// interface EducationProps {
//   teacher: ITeacher;
// }

const Pricing = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<PriceProps>({
    price: ""
  });

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
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

  return (
    <div className="flex flex-col w-[490px] sm:w-[620px] justify-center items-center p-2 bg-white rounded-lg ">
      <div className="flex flex-col">
        <Typography align="left" fontSize="lg" variant="bold" className="py-4">
          Pricing per hour
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
                name="price"
                value={formData.price}
                onChange={onChangeInput}
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price}</p>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex justify-start gap-4">
                <Button
                  type="submit"
                  radius="md"
                  className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[150px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save changes
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Pricing };
