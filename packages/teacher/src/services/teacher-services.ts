import { Filter, IQueries } from "../@types/queries.type";
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

  async TeacherList(queries: IQueries): Promise<{
    totalTeachers: number;
    totalPages: number;
    currentPage: number;
    data: ITeacher[];
  }> {
    try {
      const {
        name,
        province,
        time_available,
        pricing,
        subject,
        pageNumber = 1,
        pageSize = 10,
      } = queries as IQueries;
      const skip = (pageNumber - 1) * pageSize;

      const filter: Filter = {};

      if (name) {
        const regex = new RegExp(name, "i");
        filter.$or = [
          { first_name: regex },
          { last_name: regex },
          { province: regex },
          { "date_available.day": regex },
          { "date_available.time.start": regex },
          { "date_available.time.end": regex },
          { pricing: regex }, // Adjust if pricing is not a string
          { subject: regex },
        ];
      } // Case-insensitive regex search
      if (province) filter.province = province;
      if (time_available) filter["date_available.day"] = time_available;
      if (pricing) filter.pricing = { $eq: Number(pricing) }; // Adjust as necessary
      if (subject) filter.subject = subject;
      const { totalTeachers, data } = await this.teacherRepo.FindAllTeachers(
        {
          pageSize,
          skip,
        },
        filter
      );
      return {
        totalTeachers: totalTeachers,
        totalPages: Math.ceil(totalTeachers / pageSize),
        currentPage: pageNumber,
        data,
      };
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

      logger.info(`Existing teacher: ${existTeacher}`);
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

  async Login(userId: string): Promise<{ token: string }> {
    try {
      const existingTeacher = await this.teacherRepo.FindTeacherByUserID(
        userId
      );
      const token = await generateSignature({
        _id: existingTeacher!.id.toString(),
      });
      return { token };
    } catch (error: unknown) {
      throw error;
    }
  }
}
