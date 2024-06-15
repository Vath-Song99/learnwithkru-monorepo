"use client"
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { Button, InputForm, Typography } from "../atoms";
import * as Yup from "yup";
const DEFAULT_FORM_VALUE = {
  email: "",
};
const ForgetPassword = () => {

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUE);
  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const UpdatePasswordSchema = Yup.object().shape({
    email: Yup.string().required("email is required").email(),
});

const handleSubmit: FormEventHandler<HTMLFormElement> = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  try {
    await UpdatePasswordSchema.validate(formData, { abortEarly: false });
    setErrors({});
    // Handle form submission logic here
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
      <div className="flex flex-col mx-auto mt-10 w-full md:w-[55%] lg:w-[40%] xl:w-[35%] h-[480px] gap-y-5 border items-center rounded-md shadow-lg justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.7"
          stroke="rgb(100 116 139)"
          className="w-[64px] h-[64px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <Typography variant="bold">Forgot password?</Typography>
        <Typography>please enter your Email to reset your password.</Typography>

        {/* input form */}

        <div className="flex flex-col w-[80%]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row  sm:justify-center">
            <div className="flex flex-col">
              <div className="mb-4 sm:w-[400px]">
                <label className="block text-gray-700">
               email
                </label>
                <InputForm
                  type="email"
                  name="email"
                    borderRadius="md"
                     borderSize="forgetpassword"
                       className="border border-purple-500  outline-none text-xs"
                  value={formData.email}
                  onChange={onChangeInput}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="flex justify-center">
              <Button className="w-[50%] h-[45px] mb-3" radius="md" type="submit">
          Forgot password
        </Button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
