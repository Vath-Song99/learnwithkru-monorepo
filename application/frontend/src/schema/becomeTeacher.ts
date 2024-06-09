import * as Yup from "yup";

const TeacherSignup = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password must be at least 8 characters"),  
});

export { TeacherSignup };

const becomeTeacher = Yup.object().shape({
  lastname: Yup.string()
    .required()
    .min(3, "lastname at least 3 characters long"),
  firstname: Yup.string()
    .required()
    .min(3, "firstname at least 3 characters long"),
  phonenumber: Yup.string()
    .required()
    .min(6, "phone number at least 6 characters long"),
  province: Yup.string().required().min(3, "please select province"),
  subject: Yup.string().required().min(3, "please Select Subject "),
});

export { becomeTeacher };

const teachersExperience = Yup.object().shape({
  university: Yup.string()
    .required()
    .min(3, "university at least 3 characters long"),
  yearExperience: Yup.string()
    .required()
    .min(3, "please select year experience"),
  typeDegree: Yup.string().required().min(3, "please Select type degree "),
  degreeFile: Yup.string()
    .test("file-size", "Image size is too large", function (value) {
      const file =
        value && this.options.context && this.options.context.files
          ? this.options.context.files[value]
          : null;

      if (file && file.size) {
        return file.size <= 1024 * 1024;
      }
      return true;
    })
    .required("Please upload an image"),
});

export { teachersExperience };

const DescriptionTeachers = Yup.object().shape({
  bio: Yup.string().required().min(40, "Bio at least 40 characters long"),
  teachingExperience: Yup.string()
    .required()
    .min(40, "Teaching Experience at least 40 characters long"),
  motivatePotentail: Yup.string()
    .required()
    .min(40, "Motivate potential  at least 40 characters long "),
  videoTeaching: Yup.string().test(
    "file-size",
    "Video size is too large",
    function (value) {
      const file =
        value && this.options.context && this.options.context.files
          ? this.options.context.files[value]
          : null;

      if (file && file.size) {
        return file.size <= 1024 * 1024; // 1MB limit
      }
      return true; // No file selected, so validation passes
    }
  ),
});

export { DescriptionTeachers };
