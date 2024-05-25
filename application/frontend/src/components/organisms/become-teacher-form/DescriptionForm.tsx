"use client";
import { Button, InputForm, Typography } from "@/components/atoms";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import * as Yup from "yup";
import { BecomeTeacherFormTypes, TeachersdescriptionProps } from "./@types";
import { DescriptionTeachers } from "@/schema/becomeTeacher";
const DEFAULT_FORM_VALUE = {
  bio: "",
  teachingExperience: "",
  motivatePotentail: "",
  videoTeaching: "",
};
const DescriptionForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  fileLabel,
  pageIndex,
  setCurrentPage,
  setdataTutor,
}: BecomeTeacherFormTypes) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] =
    useState<TeachersdescriptionProps>(DEFAULT_FORM_VALUE);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
        setFormData({ ...formData, videoTeaching: imageUrl });
      }
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await DescriptionTeachers.validate(formData, { abortEarly: false });
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
    <div className="w-[564px] h-auto ">
      <Typography align="left" fontSize="lg" variant="bold" className="py-2">
        {title}
      </Typography>
      <Typography align="left" fontSize="sm" className="py-2">
        {description}
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <div className="w-full grid grid-flow-row gap-3 py-3">
          <div className="flex flex-col">
            <div className="flex justify-start">
              <div className="flex flex-col pl-[20px] mt-[60px]">
                <label htmlFor="bio" className="text-sm ">
                  Bio
                </label>
              </div>
              <div className="flex flex-col pl-[60px] sm:pl-[150px]">
                <textarea
                  id="bio"
                  name="bio"
                  placeholder="at least 50 characters"
                  onChange={onChangeInput}
                  className="outline-none w-[300px] sm:w-[350px] sm:h-[200px] h-[150px] px-2 py-1 text-sm border border-purple-500 "></textarea>
                {errors.bio && (
                  <div className="flex justify-start">
                    <small className="mt-2" style={{ color: "red" }}>
                      {errors.bio}
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <div className="flex flex-col sm:mt-[45px] mt-[40px]">
                <label htmlFor="bio" className="text-sm">
                  teaching experience
                </label>
              </div>
              <div className="flex flex-col pl-0 sm:pl-[45px]">
                <textarea
                  id="teachingExperience"
                  name="teachingExperience"
                  placeholder="at least 40 characters"
                  onChange={onChangeInput}
                  className="outline-none w-[300px] sm:w-[350px] h-[120px] px-2 py-1 text-sm  border border-purple-500 "></textarea>
                {errors.teachingExperience && (
                  <div className="flex justify-start">
                    <small className="mt-2" style={{ color: "red" }}>
                      {errors.teachingExperience}
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <div className="flex flex-col mt-[40px] sm:mt-[45px] pl-0">
                <label htmlFor="bio" className="text-sm">
                  Motivate potential study
                </label>
              </div>
              <div className="flex flex-col pl-0 sm:pl-[20px]">
                <textarea
                  id="bio"
                  name="motivatePotentail"
                  onChange={onChangeInput}
                  placeholder="at least 40 characters"
                  className="outline-none w-[300px] sm:w-[350px] h-[120px] px-2 py-1 text-sm  border border-purple-500 "></textarea>
                {errors.motivatePotentail && (
                  <div className="flex justify-start">
                    <small className="mt-2" style={{ color: "red" }}>
                      {errors.motivatePotentail}
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="fileLabel" className=" cursor-pointer mt-2 ">
              please input the video about yourself
              <div className="">
                <span className="text-sm flex justify-center">{fileLabel}</span>
                <label className="w-full h-27 flex flex-col items-center px-4 py-6  border-purple-500  bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-400">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    Select a Video
                  </span>
                  {formData.videoTeaching && (
                    <span className="mt-2 text-base leading-normal">
                      {formData.videoTeaching}
                    </span>
                  )}
                  <input
                    type="file"
                    name="videoTeaching"
                    onChange={handleImageChange}
                    className="hidden"
                    ref={inputFileRef}
                    accept="video/*"
                  />
                </label>
              </div>
            </label>
            {errors.videoTeaching && (
              <div className="flex justify-start">
                <small className="mt-2" style={{ color: "red" }}>
                  {errors.videoTeaching}
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

export { DescriptionForm };
