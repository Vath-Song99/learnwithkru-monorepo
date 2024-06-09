import { StudentServices } from '../student-services';
import { StudentRepository } from '../../database/repositories/student.repository';
import { BaseCustomError } from '../../error/base-custom-error';
import { getUserById } from '../../utils/htttp-request';
import { generateSignature } from '../../utils/jwt';
import StatusCode from '../../utils/http-status-code';
import { IStudentDecoded } from "../@types/student-service";
// Mock dependencies
jest.mock('../../database/repositories/student.repository');
jest.mock('../../utils/htttp-request');
jest.mock('../../utils/jwt');

describe('StudentServices', () => {
  let studentServices: StudentServices;
  let studentRepoMock: jest.Mocked<StudentRepository>;

  beforeEach(() => {
    studentRepoMock = new StudentRepository() as jest.Mocked<StudentRepository>;
    studentServices = new StudentServices();
    studentServices.StudentRepo = studentRepoMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Signup', () => {
    it('should create a new student and return data with token', async () => {
      const decodeId = 'testId';
      const studentData: IStudentDecoded = {
        decodeId,
        school_name: 'Test School',
        education: 'Test Education',
        grade: 9,
        student_card: 'Test Card',
      };

      const userResponse = {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
      };

      const createdStudent = {
        _id: 'newStudentId',
        userId: decodeId,
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
        school_name: 'Test School',
        education: 'Test Education',
        grade: 9,
        student_card: 'Test Card',
      };

      (studentRepoMock.FindOneStudent as jest.Mock).mockResolvedValue(null);
      (getUserById as jest.Mock).mockResolvedValue(userResponse);
      (studentRepoMock.CreateStudent as jest.Mock).mockResolvedValue(createdStudent);
      (generateSignature as jest.Mock).mockResolvedValue('fakeToken');

      const result = await studentServices.Signup(studentData);

      expect(studentRepoMock.FindOneStudent).toHaveBeenCalledWith(decodeId);
      expect(getUserById).toHaveBeenCalledWith(decodeId);
      expect(studentRepoMock.CreateStudent).toHaveBeenCalledWith(expect.objectContaining({
        userId: decodeId,
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
        school_name: 'Test School',
        education: 'Test Education',
        grade: 9,
        student_card: 'Test Card',
      }));
      expect(generateSignature).toHaveBeenCalledWith({ _id: createdStudent._id.toString() });
      expect(result).toEqual({ data: createdStudent, token: 'fakeToken' });
    });

    it('should throw an error if the student already exists', async () => {
      const decodeId = 'testId';
      const existingStudent = { _id: 'existingStudentId' };

      (studentRepoMock.FindOneStudent as jest.Mock).mockResolvedValue(existingStudent);

      await expect(studentServices.Signup({
        decodeId,
        school_name: 'Test School',
        education: 'Test Education',
        grade: 9,
        student_card: 'Test Card',
      })).rejects.toThrow(new BaseCustomError("you're already student", StatusCode.BAD_REQUEST));
    });
  });

  describe('Login', () => {
    it('should return a token for an existing student', async () => {
      const userId = 'testUserId';
      const existingStudent = { _id: 'existingStudentId' };

      (studentRepoMock.FindOneStudent as jest.Mock).mockResolvedValue(existingStudent);
      (generateSignature as jest.Mock).mockResolvedValue('fakeToken');

      const result = await studentServices.Login(userId);

      expect(studentRepoMock.FindOneStudent).toHaveBeenCalledWith(userId);
      expect(generateSignature).toHaveBeenCalledWith({ _id: existingStudent._id.toString() });
      expect(result).toEqual({ token: 'fakeToken' });
    });

    it('should throw an error if the student does not exist', async () => {
      const userId = 'testUserId';

      (studentRepoMock.FindOneStudent as jest.Mock).mockResolvedValue(null);

      await expect(studentServices.Login(userId)).rejects.toThrow();
    });
  });
});



