"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherSchemas = void 0;
const zod_1 = require("zod");
exports.teacherSchemas = zod_1.z.object({
    first_name: zod_1.z.string().min(2).max(25),
    last_name: zod_1.z.string().min(2).max(25),
    picture: zod_1.z.string(),
    phone_number: zod_1.z
        .string()
        .min(8)
        .max(10)
        .regex(/^\+?(?:855|0)\d{8}$/),
    subject: zod_1.z.string(),
    province: zod_1.z.string(),
    university: zod_1.z.string().min(2).max(70),
    year_experience: zod_1.z.number(),
    type_degree: zod_1.z.string(),
    bio: zod_1.z.string().min(40).max(200),
    motivation: zod_1.z.string().min(25).max(200),
    date_available: zod_1.z.object({
        day: zod_1.z.string(),
        time: zod_1.z.object({
            start: zod_1.z.string(),
            end: zod_1.z.string(),
        }),
    }),
    price: zod_1.z.number(),
    certificate: zod_1.z.string(),
    video: zod_1.z.string(),
    teaching_experience: zod_1.z.string().min(25).max(150)
});
//# sourceMappingURL=teacher-schema.js.map