import * as yup from "yup";

const studentSchema = yup.object().shape({
  school_name: yup
    .string()
    .required("School name is required")
    .min(3, "School name must be at least 3 characters long"),
  // student_card: yup
  //   .mixed()
  //   .test("fileSize", "File size is too large", (value: any) => {
  //     return value && value.size <= 200000; // 9MB
  //   }),
  grade: yup
    .number()
    .required("Grade is required")
    .min(1, "Grade must be at least 1")
    .max(12, "Grade must be at most 12"),
  education: yup
    .string()
    .required("Education is required")
    .max(60, "Education must be at most 60 characters long"),
});

export { studentSchema };
