export interface ITeacher {
  _id: string;
  first_name: string;
  last_name: string;
  picture: string;
  subject: string;
  phone_number: string;
  province: string;
  university: string;
  year_experience: number;
  type_degree: string;
  bio: string;
  motivation: string;
  date_available: object;
  price: number;
  video: string;
}


export interface PageDetails { totalPages: number, totalTeachers: number, currentPage: number }