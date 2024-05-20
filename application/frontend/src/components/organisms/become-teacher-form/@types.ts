import { Dispatch, SetStateAction } from "react";

interface InputFormsTypes {
  id: any;
  placeholder?: string;
  type?: string;
  borderColor?: string;
  borderRadius?: string;
}

export interface BecomeTeacherFormTypes {
  title: string;
  id?: string;
  description: string;
  inputForms?: InputFormsTypes[] | undefined;
  buttonTitle: string;
  fileLabel?: string;
  InputFormhalf?: string;
  checkboxtext?: string;
  currentPage?: number;
  pageIndex?: number[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface TimeAvailableFormTypes extends BecomeTeacherFormTypes {
  setTimeAvailable: string;
  setTimeDescription: string;
}

export interface AboutFormProps {
  lastname: string;
  firstname: string;
  phonenumber: string;
  province: string;
  subject: string;
}

export interface BecomeTeacherData {
  university: string;
  yearExperience: string;
  typeDegree: string;
  degreeFile: string;
}

export interface TeachersdescriptionProps {
  bio: string;
  teachingExperience: string;
  motivatePotentail: string;
  videoTeaching: string;
}


export interface TeachersAvailability {
 monday: {
 
 }
}