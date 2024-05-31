import { Paginate } from "../@types/paginate.type";
import { ITeacher } from "../@types/teacher.type";
import { IteacherDocs } from "../database/models/teacher.model";
import { TeacherRepository } from "../database/repositories/teacher.repository";
import { BaseCustomError } from "../error/base-custom-error";
import StatusCode from "../utils/http-status-code";
import { generateSignature } from "../utils/jwt";
import { logger } from "../utils/logger";

export class TeacherServices {
  private teacherRepo: TeacherRepository;
  constructor() {
    this.teacherRepo = new TeacherRepository();
  }

  async TeacherList(options: Paginate): Promise<ITeacher[]> {
    try {
      const { pageNumber, pageSize } = options as Paginate;
      const skip = (pageNumber - 1) * pageSize;
      const teachers = await this.teacherRepo.FindAllTeachers({
        pageSize,
        skip,
      });
      return teachers;
    } catch (error: unknown) {
      throw error;
    }
  }

  async CreateTeacher(
    requestBody: ITeacher,
    userId: string
  ): Promise<{ data: IteacherDocs; token: string }> {
    try {
      const teacherData = { userId, ...requestBody };
      const existTeacher = await this.teacherRepo.FindTeacherByUserID(userId);

      logger.info(`Existing teacher: ${existTeacher}`)
      if (existTeacher) {
        throw new BaseCustomError(
          "you aready become a teacher !",
          StatusCode.BAD_REQUEST
        );
      }

      const newTeacher = await this.teacherRepo.CreateTeacher(teacherData);

      const token = await generateSignature({
        _id: newTeacher._id!.toString(),
      });

      return { data: newTeacher, token };
    } catch (error: unknown) {
      throw error;
    }
  }

  async FindOneTeacher({ id }: { id: string }): Promise<ITeacher> {
    try {
      const teacher = await this.teacherRepo.FindTeacherById({ id });

      return teacher;
    } catch (error: unknown) {
      throw error;
    }
  }

  async Login(userId: string):Promise<{token: string}>{
    try{
      const existingTeacher = await this.teacherRepo.FindTeacherByUserID(userId) 
      const token = await generateSignature({_id: existingTeacher!.id.toString()})
      return { token}
    }catch(error: unknown){
      throw error
    }
  }
}
