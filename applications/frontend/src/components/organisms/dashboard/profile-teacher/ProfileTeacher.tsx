"use client";

import { Button, InputForm } from "@/components";
import { AboutTeacher, TeacherUpdate } from "@/schema/TeacherUpdate";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { Select } from "@/components/atoms/select/select";
import Image from "next/image";
import * as Yup from "yup";
import { Pricing } from "../teacher-edits";
const data = {
  subjects: [
    {
      id: "gegegeg4",
      subjectName: "English",
    },
    {
      id: "12244gege5",
      subjectName: "Mathematics",
    },
    {
      id: "1224455geg45",
      subjectName: "Physics",
    },
    {
      id: "122445geg545",
      subjectName: "Biology",
    },
    {
      id: "12244554f555",
      subjectName: "Chemistry",
    },
    {
      id: "1224455455445",
      subjectName: "Basic Computer",
    },
  ],
};
const dataProvince = {
  provinceDatausers: [
    { id: "1", provinceData: "Banteay Meanchey" },
    { id: "2", provinceData: "Battambang" },
    { id: "3", provinceData: "Kampong Cham" },
    { id: "4", provinceData: "Kampong Chhnang" },
    { id: "5", provinceData: "Kampong Speu" },
    { id: "6", provinceData: "Kampong Thom" },
    { id: "7", provinceData: "Kampot" },
    { id: "8", provinceData: "Kandal" },
    { id: "9", provinceData: "Kep" },
    { id: "10", provinceData: "Koh Kong" },
    { id: "11", provinceData: "Kratié" },
    { id: "12", provinceData: "Mondulkiri" },
    { id: "13", provinceData: "Oddar Meanchey" },
    { id: "14", provinceData: "Pailin" },
    { id: "15", provinceData: "Phnom Penh" },
    { id: "16", provinceData: "Preah Sihanouk" },
    { id: "17", provinceData: "Preah Vihear" },
    { id: "18", provinceData: "Prey Veng" },
    { id: "19", provinceData: "Pursat" },
    { id: "20", provinceData: "Ratanakiri" },
    { id: "21", provinceData: "Siem Reap" },
    { id: "22", provinceData: "Stung Treng" },
    { id: "23", provinceData: "Svay Rieng" },
    { id: "24", provinceData: "Takéo" },
    { id: "25", provinceData: "Tboung Khmum" },
  ],
};

const ProfileTeacher = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<AboutTeacher>({
    first_name: "",
    last_name: "",
    subject: "",
    phone_number: "",
    province: "",
  });

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await TeacherUpdate.validate(formData, { abortEarly: false });
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
    <>
      <div className="flex flex-col shadow-sm">
        <div className="flex flex-row">My account </div>
        <div className="flex justify-center w-[500px] sm:w-[660px] h-auto mt-6">
          <div className="h-auto w-[500px] sm:w-[600px]  p-2 bg-white rounded-lg ">
            <form action="" onSubmit={handleSubmit} className="">
              <div className="flex flex-col   gap-4">
                <div className="flex flex-col sm:flex-row sm:justify-between ">
                  <div className="flex flex-col w-full sm:w-[250px]">
                    <InputForm
                      type="text"
                      placeholder="First name"
                      borderRadius="md"
                      borderSize="md"
                      className="border border-purple-500  outline-none text-xs  w-full sm:w-[250px]"
                      name="first_name"
                      value={formData.first_name}
                      onChange={onChangeInput}
                    />
                    {errors.first_name && (
                      <div className="flex justify-start">
                        <small className="mt-2" style={{ color: "red" }}>
                          {errors.first_name}
                        </small>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mt-4 sm:mt-[1px] sm:w-[250px]">
                    <InputForm
                      type="text"
                      placeholder="Last name"
                      borderRadius="md"
                      borderSize="md"
                      className="border border-purple-500  w-full  outline-none text-xs sm:w-[250px]"
                      name="last_name"
                      value={formData.last_name}
                      onChange={onChangeInput}
                    />
                    {errors.last_name && (
                      <div className="flex justify-start">
                        <small className="mt-2" style={{ color: "red" }}>
                          {errors.last_name}
                        </small>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between ">
                  <div className="flex flex-col">
                    <div className="flex items-center w-full  sm:w-[250px]">
                      <button
                        id="dropdown-phone-button"
                        data-dropdown-toggle="dropdown-phone"
                        className="w-[100px] sm:w-[70px] h-[40px] inline-flex items-center  text-sm font-medium text-center border-r border-l border-t border-b border-[#7B2CBF]"
                        type="button"
                      >
                        <Image
                          alt="flag"
                          src="/Logos/flag.svg"
                          width={16}
                          height={16}
                          className="pl-[1px]"
                        ></Image>
                        +855
                      </button>
                      <div className="relative sm:w-[190px] w-full">
                        <InputForm
                          type="number"
                          borderSize="phonenumber"
                          borderColor="phonenumberSize"
                          placeholder="5544-556"
                          borderRadius="borderphone"
                          className=" pl-3  outline-none text-xs sm:w-[190px]"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={onChangeInput}
                        />
                      </div>
                    </div>
                    {errors.phone_number && (
                      <div className="flex justify-start">
                        <small className="mt-2" style={{ color: "red" }}>
                          {errors.phone_number}
                        </small>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mt-4 sm:mt-[1px] sm:w-[250px]">
                    <Select
                      borderRadius="md"
                      borderSize="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={onChangeSelect}
                      className="border border-purple-500 sm:w-[250px] outline-none text-xs"
                    >
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
                {/* this handle with teacher */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-[10px]">
                  <div className="flex flex-col mt-4 sm:mt-[1px] sm:w-[96%]">
                    <Select
                      borderSize="select"
                      borderColor="secondary"
                      borderRadius="md"
                      name="province"
                      value={formData.province}
                      onChange={onChangeSelect}
                      className="outline-none sm:w-full text-sm"
                    >
                      <option value="0" selected>
                        Select province
                      </option>
                      {dataProvince.provinceDatausers.map(
                        (provinceDatausers) => (
                          <option
                            key={provinceDatausers.id}
                            value={provinceDatausers.provinceData}
                          >
                            {provinceDatausers.provinceData}
                          </option>
                        )
                      )}
                    </Select>
                    {errors.province && (
                      <div className="flex justify-start">
                        <small className="mt-2" style={{ color: "red" }}>
                          {errors.province}
                        </small>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      radius="md"
                      className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    >
                      next
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center w-[500px] sm:w-[660px] h-auto mt-6 p-2 ">
          <Pricing />
        </div>
      </div>
    </>
  );
};

export { ProfileTeacher };
