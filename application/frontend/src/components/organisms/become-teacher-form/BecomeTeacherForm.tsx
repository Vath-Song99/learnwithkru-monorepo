"use client";
import { Button, InputForm, Typography } from "@/components/atoms";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import { BecomeTeacherData, BecomeTeacherFormTypes } from "./@types";
import { Select } from "@/components/atoms/select/select";
import * as Yup from "yup";
import { teachersExperience } from "@/schema/becomeTeacher";
const DEFAULT_FORM_VALUE = {
  university: "",
  yearExperience: "",
  typeDegree: "",
  degreeFile: "",
};
const dataExperience = {
  dataYear: [
    {
      id: "1244",
      numberData: "1",
    },
    {
      id: "124d4",
      numberData: "2",
    },
    {
      id: "12444",
      numberData: "3",
    },
  ],
};

const dataDegree = {
  dataDegree: [
    {
      id: "12444",
      name: "1",
    },
    {
      id: "12434",
      numberData: "2",
    },
    {
      id: "12433344",
      numberData: "3",
    },
  ],
};

const BecomeTeacherForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  fileLabel,
  checkboxtext,
  setCurrentPage,
  pageIndex,
}: BecomeTeacherFormTypes) => {
  const [showForm, setShowForm] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] =
    useState<BecomeTeacherData>(DEFAULT_FORM_VALUE);
  // Access File Element
  const inputFileRef = useRef<HTMLInputElement>(null);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowForm(e.target.checked);
  };
  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files && event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setFormData({ ...formData, degreeFile: imageUrl });
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
      await teachersExperience.validate(formData, { abortEarly: false });
      setIsFormComplete(true);
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

  // handle handleSubmit Don't have a Degree
  const handleSubmitNoDegree: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
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
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[600px] h-auto">
        <div className="">
          <div className="">
            <div className="flex flex-col justify-start items-start">
              <div
                className="flex justify-start sm:justify-start md:justify-center "
              >
                <Typography tags="h1" variant="bold" className="w-auto">
                  Teaching Certification
                </Typography>
              </div>
              <div
                className="mt-2"
              >
                <Typography fontSize="sm" className="flex items-start text-left text-nowrap ">
                  {description}
                </Typography>
              </div>

            </div>
            <div className="flex justify-center sm:justify-start md:justify-center mt-2">
              <div className="flex w-[400px] justify-center sm:justify-start  md:justify-center">
                <div className="flex py-[2px] pr-[10px] " >
                  <InputForm
                    type="checkbox"
                    borderRadius="md"
                    borderSize="checkbox"
                    onChange={handleCheckboxChange}
                    className="border border-purple-500outline-none text-xs "
                  />
                </div>
                <div className="flex">{checkboxtext}</div>
              </div>
            </div>
          </div>
        </div>
        {!showForm && (
          <>
            <div className="flex justify-center sm:justify-start md:justify-center w-full mt-3 ">
              <form action="" onSubmit={handleSubmitNoDegree}>
                <div className="flex flex-col gap-4 pl-[30px] sm:pl-[5px] md:pl-[10px]">
                  <div className="flex flex-col pl-[20px]   w-[450px] sm:w-[450px]">
                    <InputForm
                      borderRadius="md"
                      borderSize="Subject"
                      name="university"
                      type="hidden"
                      onChange={handleCheckboxChange}
                      className="border border-purple-500  pl-3 outline-none text-xs"
                    />
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
          </>
        )}
        {showForm && (
          <div className="flex justify-center sm:justify-start md:justify-center w-full ">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 pl-[30px] sm:pl-[5px] md:pl-[10px]">
                <div className="flex flex-col pl-[20px]   w-[450px] sm:w-[450px]">
                  <InputForm
                    placeholder="university"
                    borderRadius="md"
                    borderSize="Subject"
                    name="university"
                    type="text"
                    value={formData.university}
                    onChange={onChangeInput}
                    className="border border-purple-500  pl-3 outline-none text-xs"
                  />
                  {errors.university && (
                    <div className="flex justify-start">
                      <small className="mt-2" style={{ color: "red" }}>
                        {errors.university}
                      </small>
                    </div>
                  )}
                </div>
                <div className="flex flex-col pl-[20px] w-[450px]">
                  <Select
                    borderRadius="md"
                    borderSize="Subject"
                    name="yearExperience"
                    value={formData.yearExperience}
                    onChange={onChangeInput}
                    className="border border-purple-500 outline-none text-xs">
                    <option value="0" selected>
                      Year of experience
                    </option>
                    {dataExperience.dataYear.map((dataYear) => (
                      <option key={dataYear.id} value={dataYear.id}>
                        {dataYear.numberData}
                      </option>
                    ))}
                  </Select>
                  {errors.yearExperience && (
                    <div className="flex justify-start">
                      <small className="mt-2" style={{ color: "red" }}>
                        {errors.yearExperience}
                      </small>
                    </div>
                  )}
                </div>
                <div className="flex flex-col pl-[20px] w-[450px]">
                  <Select
                    borderRadius="md"
                    borderSize="Subject"
                    name="typeDegree"
                    value={formData.typeDegree}
                    onChange={onChangeInput}
                    className="border border-purple-500 outline-none text-xs">
                    <option value="0" selected>
                      Type of Degree
                    </option>
                    <option value="one">one</option>
                  </Select>
                  {errors.typeDegree && (
                    <div className="flex justify-start">
                      <small className="mt-2" style={{ color: "red" }}>
                        {errors.typeDegree}
                      </small>
                    </div>
                  )}
                </div>
                <div className="flex flex-col pl-[20px] w-[450px]">
                  <div className="flex justify-start">
                    <Typography>Please Input Your Degree To verify</Typography>
                  </div>
                </div>
                <div className="flex flex-col pl-[20px] w-[450px]">
                  <div className="flex flex-col">
                    <div className="flex flex-col relative border border-[#7B2CBF] focus:border-2 rounded-md ">
                      <div className="flex justify-between  cursor-pointer">
                        <svg
                          width="25"
                          height="24"
                          className="w-[30px] h-[30px] py-[2px]"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.5 16.5V18.75C3.5 19.3467 3.73705 19.919 4.15901 20.341C4.58097 20.7629 5.15326 21 5.75 21H19.25C19.8467 21 20.419 20.7629 20.841 20.341C21.2629 19.919 21.5 19.3467 21.5 18.75V16.5M8 7.5L12.5 3M12.5 3L17 7.5M12.5 3V16.5"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <InputForm
                          borderRadius="md"
                          type="file"
                          borderSize="Subject"
                          borderColor="file"
                          name="degreeFile"
                          ref={inputFileRef}
                          accept=".png,.jpg,.jpeg,.pdf"
                          onChange={handleImageChange}
                          className="pl-3  cursor-pointer file:cursor-pointer outline-none text-stone-400 file:text-sm file:text-stone-400 file:bg-none file:border-0 text-xs"
                        />
                        <div className="flex flex-col pr-[20px] pt-[10px]">
                          <svg
                            width="18"
                            height="10"
                            className="w-[15px] h-[15px]"
                            viewBox="0 0 18 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M16.5 1.25L9 8.75L1.5 1.25"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {errors.degreeFile && (
                      <div className="flex justify-start">
                        <small className="mt-2" style={{ color: "red" }}>
                          {errors.degreeFile}
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
                      className="hover:bg-violet-700 text-white text-[16px] flex justify-center w-[100px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                      next
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export { BecomeTeacherForm };
