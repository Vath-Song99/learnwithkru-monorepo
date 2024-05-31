import mongoose, { Document, Schema } from "mongoose";
import { ITeacher } from "../../@types/teacher.type";

export interface IteacherDocs extends ITeacher, Document {
  userId: string;
}

const teacherSchema = new Schema({
  userId: {
    type: String,
  },
  first_name: {
    type: String,
    minlength: 2,
    maxlength: 25,
    required: true,
  },
  last_name: {
    type: String,
    minlength: 2,
    maxlength: 25,
    required: true,
  },
  picture: {
    type: String,
  },
  phone_number: {
    type: String,
    minlength: 8,
    match: /^\+?(?:855|0)\d{8}$/,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    minlength: 2,
    maxlength: 70,
    required: true,
  },
  year_experience: {
    type: Number,
    required: true,
  },
  type_degree: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    minlength: 40,
    maxlength: 200,
    required: true,
  },
  motivation: {
    type: String,
    minlength: 25,
    maxlength: 200,
    required: true,
  },
  date_available: {
    type: {
      day: {
        type: String,
        required: true,
      },
      time: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  certificate: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  Degree: {
    type: String,
    required: true,
  },
});

const teacherModel = mongoose.model<IteacherDocs>("teachers", teacherSchema);

export default teacherModel;
