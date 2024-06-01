import * as yup from "yup";

const studentSchema = yup.object().shape({
  school_name: yup.string()
    .required("School name is required")
    .min(3, "School name must be at least 3 characters long")
    .max(50, "School name cannot exceed 50 characters"),
  education: yup.string().required("Education level is required"),
  grade: yup.string().required("Grade is required"),
  student_card: yup.mixed().notRequired(),
});

export { studentSchema };
