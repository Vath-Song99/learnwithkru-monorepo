import { teacherSchemas } from '../../schemas/teacher-schema';


describe('Teacher Schema', () => {
  it('should validate a valid teacher object', () => {
    const validTeacher = {
      first_name: "John",
      last_name: "Doe",
      picture: "http://example.com/picture.jpg",
      phone_number: "+85512345678",
      subject: "Mathematics",
      province: "Phnom Penh",
      university: "Royal University of Phnom Penh",
      year_experience: 5,
      type_degree: "Bachelor",
      bio: "I have been teaching mathematics for over five years.",
      motivation: "I love teaching because it helps shape the future.",
      date_available: {
        day: "Monday",
        time: {
          start: "09:00",
          end: "17:00",
        },
      },
      price: 50,
      certificate: "http://example.com/certificate.jpg",
      video: "http://example.com/video.mp4",
      teaching_experience: "I have taught high school students for several years."
    };


    expect(() => teacherSchemas.parse(validTeacher)).toThrow();
  });

  it('should invalidate an invalid teacher object', () => {
    const invalidTeacher = {
      first_name: "J",
      last_name: "Doe",
      picture: "http://example.com/picture.jpg",
      phone_number: "12345678", // Invalid phone number
      subject: "Mathematics",
      province: "Phnom Penh",
      university: "RU",
      year_experience: -5, // Invalid experience
      type_degree: "B",
      bio: "Teaching.",
      motivation: "Love.",
      date_available: {
        day: "Monday",
        time: {
          start: "9",
          end: "17",
        },
      },
      price: 50,
      certificate: "http://example.com/certificate.jpg",
      video: "http://example.com/video.mp4",
      teaching_experience: "Taught."
    };

    const result = teacherSchemas.safeParse(invalidTeacher);
    expect(result.success).toBe(false);
  });

  it('should invalidate an invalid teacher object', () => {
    const invalidTeacher = {
      first_name: "J",
      last_name: "Doe",
      picture: "http://example.com/picture.jpg",
      phone_number: "12345678", // Invalid phone number
      subject: "Mathematics",
      province: "Phnom Penh",
      university: "RU",
      year_experience: -5, // Invalid experience
      type_degree: "B",
      bio: "Teaching.",
      motivation: "Love.",
      date_available: {
        day: "Monday",
        time: {
          start: "9",
          end: "17",
        },
      },
      price: 50,
      certificate: "http://example.com/certificate.jpg",
      video: "http://example.com/video.mp4",
      teaching_experience: "Taught."
    };

    const result = teacherSchemas.safeParse(invalidTeacher);
    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues).toEqual([
        {
          code: "too_small",
          exact: false,
          inclusive: true,
          message: "String must contain at least 2 character(s)",
          minimum: 2,
          path: ["first_name"],
          type: "string"
        },
        {
          code: "invalid_string",
          message: "Invalid",
          path: ["phone_number"],
          validation: "regex"
        },
        {
          code: "too_small",
          exact: false,
          inclusive: true,
          message: "String must contain at least 40 character(s)",
          minimum: 40,
          path: ["bio"],
          type: "string"
        },
        {
          code: "too_small",
          exact: false,
          inclusive: true,
          message: "String must contain at least 25 character(s)",
          minimum: 25,
          path: ["motivation"],
          type: "string"
        },
        {
          code: "too_small",
          exact: false,
          inclusive: true,
          message: "String must contain at least 25 character(s)",
          minimum: 25,
          path: ["teaching_experience"],
          type: "string"
        }
      ]);
    }
  });
});









