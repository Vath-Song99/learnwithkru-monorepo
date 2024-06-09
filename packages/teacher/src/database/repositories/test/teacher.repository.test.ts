import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { TeacherRepository } from "../../repositories/teacher.repository";
// import { ApiError } from "../../../error/base-custom-error";
import teacherModel from "../../models/teacher.model";
import { ITeacher } from "../../../@types/teacher.type";
import { ApiError } from "../../../error/base-custom-error";

let mongoServer: MongoMemoryServer;


beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});


describe("teacherRepository Integration Tests", () => {
    let teacherRepository: TeacherRepository;

    beforeAll(() => {
      teacherRepository = new TeacherRepository();
    });

  describe("CreateStudent method", () => {
    test("should add a new student to the database", async () => {
        const teacherData: ITeacher = {
            first_name: 'John',
            last_name: 'Doe',
            picture: 'url',
            phone_number: '85512345678',
            subject: 'Math',
            province: 'Province',
            university: 'University',
            year_experience: 5,
            type_degree: 'Bachelor',
            bio: 'Bio description.',
            motivation: 'Motivation text.',
            date_available: {
              day: 'Monday',
              time: { start: '08:00', end: '17:00' }
            },
            price: 100,
            certificate: 'certificate',
            video: 'video',
            teaching_experience: '5 years of experience'
          };

      const newStudent = new teacherModel(teacherData);

      // Assert
      expect(newStudent).toBeDefined();
      expect(newStudent.first_name).toEqual(teacherData.first_name);
      expect(newStudent.last_name).toEqual(teacherData.last_name);

      // Check if the student exists in the database
    //   const foundStudent = await teacherRepository.FindOneStudent(newStudent._id as unknown as string);
    //   expect(foundStudent).toBeDefined();
    //   expect(foundStudent?.firstname).toEqual(MOCK_STUDENT.firstname);
    });

    it('should throw an error if teacher creation fails', async () => {
      const teacherData: ITeacher = {
        first_name: 'John',
        last_name: 'Doe',
        picture: 'url',
        phone_number: '85512345678',
        subject: 'Math',
        province: 'Province',
        university: 'University',
        year_experience: 5,
        type_degree: 'Bachelor',
        bio: 'Bio description.',
        motivation: 'Motivation text.',
        date_available: {
          day: 'Monday',
          time: { start: '08:00', end: '17:00' }
        },
        price: 100,
        certificate: 'certificate',
        video: 'video',
        teaching_experience: '5 years of experience'
      };

      jest.spyOn(teacherModel.prototype, 'save').mockImplementationOnce(() => {
        throw new Error('Simulated save error');
      });

      await expect(teacherRepository.CreateTeacher(teacherData)).rejects.toThrow(new ApiError("Somthing went wrong!"));
    });
  });


});

