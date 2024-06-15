"use client";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import * as Yup from "yup";

const DEFAULT_FORM_VALUE = {
  firstname: "",
  lastname: "",
};

const AccountSettingsForm: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUE);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
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

  const UdadateUser = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("First name is required"),
    profileImage: Yup.mixed().nullable(),
  });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(formData.firstname);
    try {
      await UdadateUser.validate(formData, { abortEarly: false });
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
    <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">
        Account Settings
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <div className="flex flex-col  sm:justify-center">
            <div className="mb-4">
              <label className="block text-gray-700">Profile image</label>
              <div className="flex items-center mt-2">
                {profileImage ? (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile"
                    className="w-[150px] h-[150px] rounded object-cover"
                  />
                ) : (
                  <div className="w-[150px] h-[150px] rounded bg-gray-300" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                 className="w-[200px] sm:w-[400px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={onChangeInput}
                className="w-[200px] sm:w-[400px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm">{errors.firstname}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={onChangeInput}
               className="w-[200px] sm:w-[400px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}
            </div>
            <div className="flex  flex-col sm:flex-row sm:justify-center">
              <button
               className="bg-violet-700 text-white text-[16px] font-bold py-2 px-4 rounded hover:bg-violet-800 focus:outline-none focus:shadow-outline"
               >
              Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsForm;
