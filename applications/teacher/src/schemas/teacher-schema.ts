import { z } from "zod";

export const teacherSchemas = z.object({
  first_name: z.string().min(2).max(25),
  last_name: z.string().min(2).max(25),
  picture: z.string(),
  phone_number: z
    .string()
    .min(8)
    .max(10)
    .regex(/^\+?(?:855|0)\d{8}$/),
  subject: z.string(),
  province: z.string(),
  university: z.string().min(2).max(70).optional(),
  year_experience: z.number().optional(),
  type_degree: z.string().optional(),
  certificate: z.string().optional(), // image
  bio: z.string().min(40).max(200),
  motivation: z.string().min(25).max(200),
  date_available: z.object({
    day: z.string(),
    time: z.object({
      start: z.string(),
      end: z.string(),
    }),
  }),
  price: z.number(),
  video: z.string(),
  teaching_experience: z.string().min(25).max(150),
});
