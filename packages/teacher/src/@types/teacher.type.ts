export interface ITeacher {
  first_name: string;
  last_name: string;
  picture: string;
  phone_number: string;
  subject: string;
  province: string; // Added to match teacherSchemas
  university: string;
  year_experience: number;
  type_degree: string;
  bio: string;
  motivation: string;
  date_available: { 
    day: string;
    time: {
      start: string;
      end: string;
    };
  }; // Adjusted to match nested structure in teacherSchemas
  price: number;
  certificate: string;
  video: string;
  // is_degree?: boolean; // Optional, not defined in teacherSchemas
  // specialization?: string; // Optional, not defined in teacherSchemas
  // teacher_experience?: string; // Optional, not defined in teacherSchemas
}
