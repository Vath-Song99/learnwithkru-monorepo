"use client";
import { Button, InputForm, Typography } from "@/components/atoms";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { AboutFormProps, BecomeTeacherFormTypes } from "./@types";
import Image from "next/image";
import * as Yup from "yup";
import { Select } from "@/components/atoms/select/select";
import { becomeTeacher } from "@/schema/becomeTeacher";
const data = {
  subjects: [
    {
      id: "122444",
      subjectName: "english",
    },
    {
      id: "122445",
      subjectName: "math",
    },
    {
      id: "122445545",
      subjectName: "khmer",
    },
  ],
};
const dataProvince = {
  provinceDatausers: [
    {
      id: "1244",
      provinceData: "Takéo",
    },
    {
      id: "12445",
      provinceData: "Siem Reap",
    },
    {
      id: "1224545",
      provinceData: "Phnom Penh",
    },
    {
      id: "1224445",
      provinceData: "Banteay Meanchey",
    },
    {
      id: "1224445",
      provinceData: "Kampong Cham",
    },
  ],
};
const DEFAULT_FORM_VALUE = {
  lastname: "",
  firstname: "",
  phonenumber: "",
  subject: "",
  province: "",
};
const AboutForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  id,
  currentPage,
  pageIndex,
  setCurrentPage,
  setdataTutor,
}: BecomeTeacherFormTypes) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<AboutFormProps>(DEFAULT_FORM_VALUE);
  const [isFormComplete, setIsFormComplete] = useState(false);
  // const [dataTutor, setdataTutor] = useState<any>(null);
  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const nextPage = () => {
    if (!isFormComplete) {
      return;
    }
  };
  nextPage();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await becomeTeacher.validate(formData, { abortEarly: false });
      setIsFormComplete(true);
      setdataTutor((prev: any) => {
        // Spread the previous state
        const newState = { ...prev, ...formData };
        // Return the new state
        return newState;
      });
      if (pageIndex !== undefined) {
        // use pageIndex here
        setCurrentPage((prevPage) =>
          Math.min(prevPage + 1, pageIndex.length - 1)
        );
      }

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
    <div className=" h-auto w-[300px] sm:w-[480px] md:w-[500px] lg:w-[500px] " id={`${id}`}>
      <Typography align="left" fontSize="lg" variant="bold" className="py-2">
        {title}
      </Typography>
      <Typography align="left" fontSize="sm" className="py-2">
        {description}
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col  gap-4 ">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full sm:w-auto ">
              <InputForm
                type="text"
                placeholder="First name"
                borderRadius="md"
                borderSize="md"
                className="border border-purple-500  outline-none text-xs  w-full sm:w-[240px]"
                name="firstname"
                value={formData.firstname}
                onChange={onChangeInput}
              />
              {errors.firstname && (
                <div className="flex justify-start">
                  <small className="mt-2" style={{ color: "red" }}>
                    {errors.firstname}
                  </small>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <InputForm
                type="text"
                placeholder="Last name"
                borderRadius="md"
                borderSize="md"
                className="border border-purple-500  w-full sm:w-[240px] outline-none text-xs"
                name="lastname"
                value={formData.lastname}
                onChange={onChangeInput}
              />
              {errors.lastname && (
                <div className="flex justify-start">
                  <small className="mt-2" style={{ color: "red" }}>
                    {errors.lastname}
                  </small>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-[10px] ">
            <div className="flex flex-col">
              <div className="flex items-center w-full  sm:w-[240px]">
                <button
                  id="dropdown-phone-button"
                  data-dropdown-toggle="dropdown-phone"
                  className="w-[70px] sm:w-[60px] h-[40px] inline-flex items-center  text-sm font-medium text-center border-r border-l border-t border-b border-[#7B2CBF]"
                  type="button">
                  <Image
                    alt="flag"
                    src="/Logos/flag.svg"
                    width={16}
                    height={16}
                    className="pl-[1px]"></Image>
                  +855
                </button>
                <div className="relative sm:w-[130px] w-full">
                  <InputForm
                    type="number"
                    borderSize="phonenumber"
                    borderColor="phonenumberSize"
                    placeholder="5544-556"
                    borderRadius="borderphone"
                    className=" pl-3  outline-none text-xs"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              {errors.phonenumber && (
                <div className="flex justify-start">
                  <small className="mt-2" style={{ color: "red" }}>
                    {errors.phonenumber}
                  </small>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-4 sm:mt-[1px] sm:w-[240px]">
              <Select
                borderRadius="md"
                borderSize="Subject"
                name="subject"
                value={formData.subject}
                onChange={onChangeSelect}
                className="border border-purple-500 sm:w-[240px] outline-none text-xs">
                <option value="0" selected>
                  Select Subject
                </option>
                {data.subjects.map((subjects) => (
                  <option key={subjects.id} value={subjects.subjectName}>
                    {subjects.subjectName}
                  </option>
                ))}
              </Select>

              {errors.subject && (
                <div className="flex justify-start">
                  <small className="mt-2" style={{ color: "red" }}>
                    {errors.subject}
                  </small>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <Select
              borderSize="select"
              borderColor="secondary"
              borderRadius="md"
              name="province"
              value={formData.province}
              onChange={onChangeSelect}
              className="outline-none">
              <option value="0" selected>
                Select province
              </option>
              {dataProvince.provinceDatausers.map((provinceDatausers) => (
                <option key={provinceDatausers.id} value={provinceDatausers.provinceData}>
                  {provinceDatausers.provinceData}
                </option>
              ))}
            </Select>
            {errors.province && (
              <div className="flex justify-start">
                <small className="mt-2" style={{ color: "red" }}>
                  {errors.province}
                </small>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex justify-end">
              <Button
                type="submit"
                radius="md"
                className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                next
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export { AboutForm };
