import * as Yup from "yup";
const becomeTeacher = Yup.object().shape({
   last_name: Yup.string()
    .required("lastname is a required field")
    .min(3, "lastname at least 3 characters long"),
    first_name: Yup.string()
    .required("firstname is a required field")
    .min(3, "firstname at least 3 characters long"),
  phone_number: Yup.string()
    .required("number is a required field")
    .min(6, "phone number at least 6 characters long"),
  province: Yup.string().required().min(3, "please select province"),
  subject: Yup.string().required().min(3, "please Select Subject "),
});

export { becomeTeacher };

const teachersExperience = Yup.object().shape({
  university: Yup.string()
    .required()
    .min(3, "university at least 3 characters long"),
    year_experience: Yup.string()
    .required("please Select year"),
    type_degree: Yup.string().required().min(3, "please Select type degree "),
    certificate: Yup.string()
    .test("file-size", "Image size is too large", function (value) {
      const file =
        value && this.options.context && this.options.context.files
          ? this.options.context.files[value]
          : null;
      if (file && file.size) {
        return file.size <= 1024 * 1024; // 1MB limit
      }
      return true;
    })
    .required("Please upload an image"),
});

export { teachersExperience };

const DescriptionTeachers = Yup.object().shape({
  bio: Yup.string().required().min(40, "Bio at least 40 characters long"),
  teaching_experience: Yup.string()
    .required()
    .min(40, "Teaching Experience at least 40 characters long"),
    motivation: Yup.string()
    .required()
    .min(40, "Motivate potential  at least 40 characters long "),
    video: Yup.string()
    .test("file-size", "video size is too large", function (value) {
      const file =
        value && this.options.context && this.options.context.files
          ? this.options.context.files[value]
          : null;
      if (file && file.size) {
        return file.size <= 10 *1024 * 1024; // 1MB limit
      }
      return true;
    })
    .required("Please upload an video"),
});

export { DescriptionTeachers };

const PriceTeachers = Yup.object().shape({
  priceTeacher: Yup.string()
  .min(1, "price should be at least 1 number")
  .max(3, "price should not exceed 990")
  .required("Please enter a price."),
});

export { PriceTeachers };
