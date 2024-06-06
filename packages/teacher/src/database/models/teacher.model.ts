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
    index: true,
  },
  last_name: {
    type: String,
    minlength: 2,
    maxlength: 25,
    required: true,
    index: true,
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
    index: true,
  },
  province: {
    type: String,
    required: true,
    index: true,
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
        index: true,
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
    index: true,
  },
  certificate: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date, default: Date.now
  },
  teaching_experience: {
    type: String,
    min: 25,
    max:150
  }
});

const teacherModel = mongoose.model<IteacherDocs>("teachers", teacherSchema);

export default teacherModel;
