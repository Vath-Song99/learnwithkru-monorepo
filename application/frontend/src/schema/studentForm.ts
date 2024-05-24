import * as yup from "yup";

const studentSchema = yup.object().shape({
  schoolName: yup
    .string()
    .required("School name is required")
    .min(3, "School name must be at least 3 characters long"),
  studentCard: yup
    .mixed()
    .required("Student card is required")
    .test("fileSize", "File size is too large", (value: any) => {
      return value && value[0] && value[0].size <= 2000000; // 2MB
    })
    .test("fileType", "Unsupported file format", (value: any) => {
      return (
        value &&
        value[0] &&
        ["image/jpeg", "image/png", "application/pdf"].includes(value[0].type)
      );
    }),
  grade: yup
    .number()
    .required("Grade is required")
    .min(1, "Grade must be at least 1")
    .max(12, "Grade must be at most 12"),
  bio: yup
    .string()
    .required("Bio is required")
    .max(60, "Bio must be at most 60 characters long"),
});

export { studentSchema };
