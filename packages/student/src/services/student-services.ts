import { StudentRepository } from "../database/repositories/student.repository";
import { BaseCustomError } from "../error/base-custom-error";
import StatusCode from "../utils/http-status-code";
import { getUserById } from "../utils/htttp-request";
import { generateSignature } from "../utils/jwt";
import { StudentService } from "./@types/student-service";

export class StudentServices {
  public StudentRepo: StudentRepository;
  constructor() {
    this.StudentRepo = new StudentRepository();
  }

  async Signup({
    decodeId,
    schoolName,
    education,
    grade,
    studentCard,
  }: StudentService) {
    try {
      const existingStudent = await this.StudentRepo.FindOneStudent(decodeId);

      console.log("This error :",existingStudent)
      if (existingStudent) {
        throw new BaseCustomError(
          "you're already student",
          StatusCode.BAD_REQUEST
        );
      }
      const data = await getUserById(decodeId);

      const { firstname, lastname, email } = data;
      const newStudent = await this.StudentRepo.CreateStudent({
        userId: decodeId,
        firstname,
        lastname,
        email: email as string,
        schoolName,
        education,
        grade,
        studentCard,
      });

      const token = await generateSignature({ _id: newStudent._id.toString() });
      return { data: newStudent, token };
    } catch (error) {
      throw error;
    }
  }
}
