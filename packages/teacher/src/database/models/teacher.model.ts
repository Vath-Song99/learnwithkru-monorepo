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
  subject: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    minlength: 50,
    maxlength: 120,
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
    minlength: 50,
    maxlength: 120,
    required: true,
  },
  teacher_experience: {
    type: String,
    required: true,
  },
  motivation: {
    type: String,
    minlength: 25,
    maxlength: 100,
    required: true,
  },
  date_available: {
    type: Object, // Adjusted type
    required: true,
  },
  price: {
    type: Number,
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
