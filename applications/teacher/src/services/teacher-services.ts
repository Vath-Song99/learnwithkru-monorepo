import { Filter, IQueries } from "../@types/queries.type";
import { ITeacher } from "../@types/teacher.type";
import { ITeacherDocs } from "../database/models/teacher.model";
import { TeacherRepository } from "../database/repositories/teacher.repository";
import { BaseCustomError } from "../error/base-custom-error";
import StatusCode from "../utils/http-status-code";
import { generateSignature } from "../utils/jwt";
import { logger } from "../utils/logger";
import { NotificationService } from "./notification-serivice";

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
        min_p,
        max_p,
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
      if (min_p && max_p)
        filter.pricing = { $gte: Number(min_p), $lte: Number(max_p) }; // Adjust as necessary
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
  ): Promise<{ data: ITeacherDocs; token: string }> {
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

      const messageSender = NotificationService.getInstance();
      await messageSender.sendSuccesfullyNotification({
        userId: newTeacher._id!.toString(),
        message: `
      Congratulations, [${newTeacher.first_name + newTeacher.last_name}]!

You have successfully signed up for an account. Welcome to our community!

Start exploring and discovering all the features we have to offer. Should you have any queries or need assistance, don't hesitate to reach out to us.

We're thrilled to have you on board!
      `,
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
