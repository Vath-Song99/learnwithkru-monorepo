import { IResponeUser } from "../@types/user.type";
import { StudentRepository } from "../database/repositories/student.repository";
import { BaseCustomError } from "../error/base-custom-error";
import StatusCode from "../utils/http-status-code";
import { getUserById } from "../utils/htttp-request";
import { generateSignature } from "../utils/jwt";
import { IStudentDecoded } from "./@types/student-service";

export class StudentServices {
  public StudentRepo: StudentRepository;
  constructor() {
    this.StudentRepo = new StudentRepository();
  }

  async Signup({
    decodeId,
    school_name,
    education,
    grade,
    student_card,
  }: IStudentDecoded) {
    try {
      const existingStudent = await this.StudentRepo.FindOneStudent(decodeId);

      console.log("This error :", existingStudent);
      if (existingStudent) {
        throw new BaseCustomError(
          "you're already student",
          StatusCode.BAD_REQUEST
        );
      }
      const data = await getUserById(decodeId);

      const { first_name, last_name, email, picture } = data;
      const newStudent = await this.StudentRepo.CreateStudent({
        userId: decodeId,
        first_name,
        last_name,
        email: email as string,
        school_name,
        education,
        grade,
        student_card,
        picture,
      });

      const token = await generateSignature({ _id: newStudent._id.toString() });
      return { data: newStudent, token };
    } catch (error) {
      throw error;
    }
  }

  async Login(userId: string): Promise<{ token: string }> {
    try {
      const existingStudent = await this.StudentRepo.FindOneStudent(userId);

      const token = await generateSignature({
        _id: existingStudent!._id.toString(),
      });
      return { token };
    } catch (error: unknown) {
      throw error;
    }
  }

  async GetStudentByStudentId(id: string): Promise<IResponeUser> {
    try {
      const existingStudent = await this.StudentRepo.FindOneStudent(id);
      if (!existingStudent) {
        throw new BaseCustomError("No student found!", StatusCode.NOT_FOUND);
      }
      const { first_name, last_name, email, picture } =
        existingStudent as IResponeUser;
      return {
        first_name,
        last_name,
        email,
        picture,
      };
    } catch (error: unknown) {
      throw error;
    }
  }
}
