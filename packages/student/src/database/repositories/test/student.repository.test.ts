import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { StudentRepository } from "../../repositories/student.repository";
import { ApiError } from "../../../error/base-custom-error";
import { StudentModel } from "../../models/student.model";

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


describe("StudentRepository Integration Tests", () => {
  let studentRepository: StudentRepository;

  beforeEach(() => {
    studentRepository = new StudentRepository();
  });

  describe("CreateStudent method", () => {
    test("should add a new student to the database", async () => {
      const MOCK_STUDENT = {
        school_name: "Test School",
        education: "Test Education",
        grade:9,
        student_card: "Test Card",
        firstname: "Test Firstname",
        lastname: "Test Lastname",
        email: "test_student@example.com",
        userId: "test_user_id",
      };

      const newStudent = await studentRepository.CreateStudent(MOCK_STUDENT);

      // Assert
      expect(newStudent).toBeDefined();
      expect(newStudent.firstname).toEqual(MOCK_STUDENT.firstname);
      expect(newStudent.email).toEqual(MOCK_STUDENT.email);

      // Check if the student exists in the database
      const foundStudent = await studentRepository.FindOneStudent(newStudent._id as unknown as string);
      expect(foundStudent).toBeDefined();
      expect(foundStudent?.firstname).toEqual(MOCK_STUDENT.firstname);
    });

    test("should throw ApiError if student creation fails", async () => {
      const saveMock = jest.spyOn(StudentModel.prototype, "save");
      saveMock.mockRejectedValue(new ApiError("Database error"));

      const MOCK_STUDENT = {
        school_name: "Test School",
        education: "Test Education",
        grade: 9,
        student_card: "Test Card",
        firstname: "Test Firstname",
        lastname: "Test Lastname",
        email: "test_student1@example.com",
        userId: "test_user_id",
      };

      await expect(studentRepository.CreateStudent(MOCK_STUDENT)).rejects.toThrow( new ApiError("Database error"));

      saveMock.mockRestore();
    });
  });

  describe("FindOneStudent method", () => {
    test("should find a student by studentId", async () => {
      const MOCK_STUDENT = new StudentModel({
        school_name: "Test School",
        education: "Test Education",
        grade: 9,
        student_card: "Test Card",
        firstname: "Test Firstname",
        lastname: "Test Lastname",
        email: "test_student@example.com",
        userId: "test_user_id",
      });
      await MOCK_STUDENT.save();

      const foundStudent = await studentRepository.FindOneStudent(MOCK_STUDENT._id as unknown as string);

      expect(foundStudent).toBeDefined();
      expect(foundStudent?.firstname).toEqual(MOCK_STUDENT.firstname);
    });
  });

  describe("FindByUserId method", () => {
    test("should find a student by userId", async () => {
      const MOCK_STUDENT = new StudentModel({
        school_name: "Test School",
        education: "Test Education",
        grade: 9,
        student_card: "Test Card",
        firstname: "Test Firstname",
        lastname: "Test Lastname",
        email: "test_student@example.com",
        userId: "test_user_id",
      });
      await MOCK_STUDENT.save();

      const foundStudent = await studentRepository.FindByUserId(MOCK_STUDENT.userId as string);

      expect(foundStudent).toBeDefined();
      expect(foundStudent?.userId).toEqual(MOCK_STUDENT.userId);
    });
  });
});
