import * as Yup from "yup";
const createClassSchema = Yup.object().shape({
  classroom: Yup.string()
    .required()
    .min(3, "classromm should be at least 3 characters long"),
  subject: Yup.string()
    .required()
    .min(3, "classromm should be at least 3 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
});

export { createClassSchema };
