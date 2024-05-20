import * as Yup from "yup"; // Import Yup library

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
      "Password must  uppercase  lowercase number special character"
    ),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
});
export const validationTeacher = Yup.object().shape({
  Firstname: Yup.string()
    .required("First name is required")
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters"),

  Lastname: Yup.string()
    .required("Last name is required")
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  Password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
      "Password must  uppercase  lowercase number special character"
    ),
  Address: Yup.string().required("Address is required"),
  PhoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  bio: Yup.string().required("Bio is required"),
});
