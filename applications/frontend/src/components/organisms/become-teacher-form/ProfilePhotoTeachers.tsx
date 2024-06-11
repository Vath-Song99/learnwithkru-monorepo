"use client";
import { Button, InputForm, Typography } from "@/components/atoms";
import { PriceTeachers, ProfilePhoto } from "@/schema/becomeTeacher";
import { BecomeTeacherFormTypes, BecomeTeacherType } from "./@types";
import Image from "next/image";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Yup from "yup";
import {
  getLocalStorageTeacher,
  setLocalStorageTeacher,
} from "@/utils/localStorage";

const DEFAULT_FORM_VALUE = {
  picture: "",
};

interface PriceProps {
  picture: string;
}

const ProfilePhotoTeachers = ({
  title,
  description,
  currentPage,
  pageIndex,
  setCurrentPage,
  setdataTutor,
  dataUser,
}: BecomeTeacherFormTypes) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<PriceProps>(DEFAULT_FORM_VALUE);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null;
    if (imageFile) {
      if (imageFile.size > 1024 * 1024) {
        // 1MB limit
        setErrors((prevErrors) => ({
          ...prevErrors,
          picture: "profile size is too large",
        }));
        setPreviewURL("");
      } else {
        const imageUrl = URL.createObjectURL(imageFile);
        setFormData({ ...formData, picture: imageUrl });
        setPreviewURL(imageUrl);
        setErrors((prevErrors) => ({ ...prevErrors, picture: "" }));
      }
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await ProfilePhoto.validate(formData, { abortEarly: false });
      setIsFormComplete(true);
      if (pageIndex !== undefined) {
        setCurrentPage((prevPage) =>
          Math.min(prevPage + 1, pageIndex.length - 1)
        );
      }
      setdataTutor((prev: PriceProps) => ({ ...prev, ...formData }));
      setLocalStorageTeacher("ProfilePhoto", formData);
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

  const nextPage = () => {
    if (!isFormComplete) {
      return;
    }
  };
  nextPage();
  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
useEffect(() => {
    const userStorage = getLocalStorageTeacher("ProfilePhoto");
    
    if (userStorage) {
      setFormData(userStorage);
    } else if (dataUser) {
      setFormData({
        picture: dataUser.picture || '',
      });
    }
  }, [dataUser]);




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
          {dataUser && (
            <div className="flex flex-col">
              <div className="flex mt-3 w-[160px] h-[160px] items-center justify-end rounded-full overflow-hidden">
                {!previewURL ? (
                  <Image
                    className="object-cover w-full h-full"
                    src={dataUser.picture ?? '/default-avatar.png'} 
                    alt="Bordered avatar"
                    width={160}
                    height={160}
                  />
                ) : (
                  previewURL && (
                    <img
                      src={previewURL}
                      alt="Preview"
                      className=" w-[160px] h-[160px] flex justify-start"
                    />
                  )
                )}
              </div>
              <label className="bg-[#007C00] text-white w-[100%] h-[45px] sm:w-[90%] sm:h-[45px] md:w-[55%] md:h-[45px] lg:w-[85%] lg:h-[35px] mt-5 rounded-md xl:w-[80%] xl:h-[40px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] flex items-center justify-center cursor-pointer">
                <InputForm
                  type="file"
                  className="hidden"
                  name="picture"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={inputFileRef}
                />
                Upload new photo
              </label>
              {errors.picture && (
                <div className="flex justify-start">
                  <small className="mt-2" style={{ color: "red" }}>
                    {errors.picture}
                  </small>
                </div>
              )}
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
          )}
        </form>
      </div>
    </div>
  );
};

export { ProfilePhotoTeachers };
