"use client"
import React, { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Button, InputForm, Typography } from "../atoms";
import { validationSchema, validationTeacher } from "@/schema/editProfileSchema";
import Link from "next/link";

interface MenuItemProps {
  itemName: string;
  active: boolean;
  handleClick: (itemName: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  itemName,
  active,
  handleClick,
}) => {
  return (
    <Link
      onClick={() => handleClick(itemName)}
      className={`cursor-pointer text-[20px] sm:text-[20px] md:text-[16px] lg:text-[20px] xl:text-[20px] ${active ? "border-b-2 border-[#7B2CBF] text-[#7B2CBF]" : ""}`}
      style={{ padding: "15px" }} href={""}    >
      {itemName}
    </Link>
  );
};



const SettingsProfile = () => {
  const [selectedItem, setSelectedItem] = useState<string>("User Info");
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileInput = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        alert("Please select an image file");
      } else if (selectedFile.size > 2 * 1024 * 1024) {
        alert("The file size should be less than 2MB");
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }
  const [formValues, setFormValues] = useState({ // Corrected state variable name from "form" to "formValues"
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement | HTMLTextAreaElement> = async (event) => {
    event.preventDefault();
    // Handle form submission
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
    }
    catch (error) {

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

  //form teacher
  const [formteacher, setFormTeacher] = useState({
    bio: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Address: "",
    PhoneNumber: "",
  })


  const handleChangeFormTeacher = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormTeacher({ ...formteacher, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };


  const handleSubmitFormTeacher: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await validationTeacher.validate(formValues, { abortEarly: false });
    }
    catch (error) {

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
    <div className="w-[100%] sm:w-full md:w-[90%] lg:w-[100%] xl:w-[80%] h-150 mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
      {/* Left profile */}
      <div className=" p-4 flex flex-col h-[600px] gap-y-3 items-center md:items-center bg-[#F8F8F8]  lg:w-[35%] xl:w-[40%] w-full md:w-full rounded-md">
        <Typography fontSize="lg" variant="bold" className="mt-4">
          Ny Sreyneang
        </Typography>
        <div className="flex mt-3 w-[160px] h-[160px] items-center justify-end rounded-full overflow-hidden">
          {!previewURL ?
            <Image
              className="object-cover w-full h-full"
              src="/Profiles/example1.jpg"
              alt="Bordered avatar"
              width={160}
              height={160}

            /> :
            (previewURL && <img src={previewURL} alt="Preview" className=" w-[160px] h-[160px] flex justify-start" />)

          }

        </div>
        <label className="bg-[#007C00] text-white w-[100%] h-[45px] sm:w-[90%] sm:h-[45px] md:w-[55%] md:h-[45px] lg:w-[85%] lg:h-[35px] mt-5 rounded-md xl:w-[80%] xl:h-[40px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] flex items-center justify-center cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={handleFileInput}
          />

          Upload new photo
        </label>
        <Typography className="text-[12px]">
          The photo should be less than 2mb size
        </Typography>
        {file && (
          <div>
            <Typography>
              Selected file: {(file as File).name} ({(file as File).size / 1024} KB)
            </Typography>
          </div>
        )}
        <Typography className="text-[12px]">member since: 12 September 2024</Typography>
      </div>

      {/* Right profile */}
      <div className="p-4 flex flex-col   w-[100%] md:w-[100%] rounded-md    sm:ml-0 md:ml-0 lg:ml-10 xl:ml-10">
        {/* edit profile */}
        <div className="bg-[#F8F8F8] pt-5 mt-5 ml-0 sm:ml-0 lg:ml-0 xl:ml-0 w-[100%] md:w-[100%] rounded-md">
          <Typography
            className="text-center md:text-left ml-0 md:ml-10 lg:ml-10 xl:ml-10 py-4 text-[30px] md:text-[30px] lg:text-[40px] xl:text-[40px]"
            variant="bold"
            align="left"
          >
            Edit profile
          </Typography>
          <div className="flex ml-10">
            <MenuItem
              itemName="User Info"
              active={selectedItem === "User Info"}
              handleClick={handleItemClick}
            />
            <div style={{ margin: "0 15px" }}></div>
            <MenuItem
              itemName="Teacher Info"
              active={selectedItem === "Teacher Info"}
              handleClick={handleItemClick}
            />
          </div>
        </div>

        {
          //user setting 
          selectedItem === 'User Info' ? (
            <form onSubmit={handleSubmit}>

              <div className="flex flex-col mt-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                  <Typography align="left" fontSize="md">
                    First Name
                  </Typography>
                  <InputForm
                    className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                    type="text"
                    borderRadius="md"
                    placeholder="First Name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <>
                      <p className="text-red-500">{errors.firstName}</p>
                    </>
                  )}
                </div>
                <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                  <Typography align="left" fontSize="md">
                    Last Name
                  </Typography>
                  <InputForm
                    className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                    type="Last Name"
                    placeholder="Last Name"
                    borderRadius="md"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <>
                      <p className="text-red-500">{errors.lastName}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col mt-2 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                  <Typography align="left" fontSize="md">
                    Email
                  </Typography>
                  <InputForm
                    className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                    type="email"
                    borderRadius="md"
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {errors.email && (

                    <>
                      <p className=" text-red-500">
                        {errors.email}
                      </p>
                    </>
                  )}

                </div>
                <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                  <Typography align="left" fontSize="md">
                    Password
                  </Typography>
                  <InputForm
                    className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                    type="password"
                    placeholder="Password"
                    borderRadius="md"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <>
                      <p className="text-red-500">{errors.password}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col mt-2 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                  <Typography align="left" fontSize="md">
                    Address
                  </Typography>
                  <InputForm
                    className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                    type="address"
                    borderRadius="md"
                    placeholder="Address"
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <>
                      <p className="text-red-500">{errors.address}</p>
                    </>
                  )}
                </div>
                <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                  <Typography align="left" fontSize="md">
                    Phone Number
                  </Typography>
                  <InputForm
                    className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                    type="Tel"
                    placeholder="Phone Number"
                    borderRadius="md"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <>
                      <p className="text-red-500">{errors.phoneNumber}</p>
                    </>
                  )}
                </div>
              </div>
              <Button
                fontSize="md"
                className="w-full mt-8 mb-10 h-[45px] sm:w-[120px] sm:h-[45px] md:w-[150px] md:h-[45px] lg:w-[150px] lg:h-[45px] rounded-md xl:w-[160px] xl:h-[45px]"
                onClick={() => handleSubmit}
              >
                Update Info
              </Button>
            </form>
          )
            :
            //teacher setting  
            (
              <form onSubmit={handleSubmitFormTeacher}>
                <div className="flex flex-col mt-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                  <div className="flex flex-col md:w-[100%] lg:w-[100%] mt-3 xl:w-[100%]">
                    <Typography align="center" fontSize="md" className="mb-2">
                      Edit Your Bio
                    </Typography>
                    <textarea
                      className="h-32 border p-2 outline-none focus:outline-[#7B2CBF] rounded-md"
                      placeholder="Bio..."
                      value={formteacher.bio}
                      name="bio"
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.bio && (
                      <>
                        <p className="text-red-500">
                          {errors.bio}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col mt-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                  <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                    <Typography align="left" fontSize="md">
                      First Name
                    </Typography>
                    <InputForm
                      className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                      type="Firt Name"
                      borderRadius="md"
                      placeholder="First Name"
                      name="Firstname"
                      value={formteacher.Firstname}
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.Firstname && (
                      <p className="text-red-500">
                        {errors.Firstname}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                    <Typography align="left" fontSize="md">
                      Last Name
                    </Typography>
                    <InputForm
                      className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                      type="Last Name"
                      placeholder="Last Name"
                      borderRadius="md"
                      name="Lastname"
                      value={formteacher.Lastname}
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.Lastname && (
                      <p className="text-red-500">
                        {errors.Lastname}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col mt-2 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                  <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                    <Typography align="left" fontSize="md">
                      Email
                    </Typography>
                    <InputForm
                      className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                      type="email"
                      borderRadius="md"
                      placeholder="Email"
                      name="Email"
                      value={formteacher.Email}
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.Email && (
                      <p className="text-red-500">
                        {errors.Email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                    <Typography align="left" fontSize="md">
                      Password
                    </Typography>
                    <InputForm
                      className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                      type="password"
                      placeholder="Password"
                      borderRadius="md"
                      name="Password"
                      value={formteacher.Password}
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.Password && (
                      <p className="text-red-500">
                        {errors.Password}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col mt-2 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
                  <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                    <Typography align="left" fontSize="md">
                      Address
                    </Typography>
                    <InputForm
                      className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                      type="address"
                      borderRadius="md"
                      placeholder="Address"
                      name="Address"
                      value={formteacher.Address}
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.Address && (
                      <p className="text-red-500">
                        {errors.Address}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
                    <Typography align="left" fontSize="md">
                      Phone Number
                    </Typography>
                    <InputForm
                      className="h-[50px] w-full border-gray-400 mt-2 focus:outline-[#7B2CBF]"
                      type="Tel"
                      placeholder="Phone Number"
                      borderRadius="md"
                      name="PhoneNumber"
                      value={formteacher.PhoneNumber}
                      onChange={handleChangeFormTeacher}
                    />
                    {errors.PhoneNumber && (
                      <p className="text-red-500">
                        {errors.PhoneNumber}
                      </p>
                    )}

                  </div>
                </div>
                <Button
                  fontSize="md"
                  className="w-full mt-8 mb-10 h-[45px] sm:w-[120px] sm:h-[45px] md:w-[150px] md:h-[45px] lg:w-[150px] lg:h-[45px] rounded-md xl:w-[160px] xl:h-[45px]"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            )

        }

      </div>
    </div >
  );
};

export default SettingsProfile;
