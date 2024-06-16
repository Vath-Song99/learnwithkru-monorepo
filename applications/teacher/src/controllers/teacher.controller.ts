import StatusCode from "../utils/http-status-code";
import { TeacherServices } from "../services/teacher-services";
import { IQueries } from "../@types/queries.type";
import { PATH_TEACHER } from "../routes/path-defs";
import { authorize } from "../middlewares/authorize";
import { ValidateInput } from "../middlewares/validate-input";
import {
  teacherSchemas,
  updateTeacherSchemas,
} from "../schemas/teacher-schema";
import { DecodedUser } from "../@types/express-extend.type";
import {
  Body,
  Controller,
  Get,
  Middlewares,
  Post,
  Queries,
  SuccessResponse,
  Request,
  Route,
  Path,
  Patch,
} from "tsoa";
import { ITeacher, ITeacherUpdate } from "../@types/teacher.type";
import { logger } from "../utils/logger";

@Route("/v1/teachers")
export class TeacherController extends Controller {
  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_TEACHER.teacherList)
  public async TeacherList(@Queries() queries: IQueries): Promise<{
    message: string;
    detail: { totalPages: number; totalTeachers: number; currentPage: number };
    data: ITeacher[];
  }> {
    try {
      const service = new TeacherServices();
      const { totalPages, totalTeachers, data, currentPage } =
        await service.TeacherList(queries);

      return {
        message: "Success retrieve teachers",
        data,
        detail: {
          totalPages,
          totalTeachers,
          currentPage,
        },
      };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_TEACHER.teacherSignup)
  @Middlewares(ValidateInput(teacherSchemas))
  @Middlewares(authorize(["user", "teacher"]))
  public async TeacherSingup(
    @Body() requestBody: ITeacher,
    @Request() req: Express.Request
  ): Promise<{ data: ITeacher; token: string }> {
    try {
      const userId = (req.user as DecodedUser).id;
      logger.info(`Catching decode user: ${userId}`);
      const service = new TeacherServices();
      const newUser = await service.CreateTeacher(requestBody, userId);

      return newUser;
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_TEACHER.teacherProfile)
  async FindOneTeacher(
    @Path() id: string
  ): Promise<{ message: string; data: ITeacher }> {
    try {
      const service = new TeacherServices();
      const teacher = await service.FindOneTeacher({ id });
      return { message: "Success retrieve teacher", data: teacher };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_TEACHER.login)
  async Login(
    @Path() userId: string
  ): Promise<{ message: string; token: string }> {
    try {
      const service = new TeacherServices();
      const respone = await service.Login(userId);
      return { message: "Success login", token: respone.token };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "GET OK")
  @Middlewares(authorize(["teacher"]))
  @Get(PATH_TEACHER.getTeacher)
  async GetTeacher(
    @Request() req: Express.Request,
    @Path('id') id?: string , 
  ): Promise<{ message: string; data: ITeacher }> {
    try {
      const userId = (req.user as DecodedUser).id;
      let teacherId: string;
      if(id){
        teacherId = id
      }
      teacherId = userId
      const serivice = new TeacherServices();
      const existingTeacher = await serivice.GetTeacher(teacherId as string);

      return {
        message: "Success Retrieved teacher",
        data: existingTeacher.data,
      };
    } catch (error: unknown) {
      throw error;
    }
  }

  @Middlewares(ValidateInput(updateTeacherSchemas))
  @SuccessResponse(StatusCode.CREATED, "Updated")
  @Patch(PATH_TEACHER.updateTeacher)
  async UpdateTeacher(
    @Path() id: string,
    @Body() requestBody: ITeacherUpdate
  ): Promise<{ message: string; data: ITeacher }> {
    try {
      const service = new TeacherServices();
      const updatedTeacher = await service.UpdateTeacher({ id, requestBody });

      return { message: "Success updated teacher", data: updatedTeacher.data };
    } catch (error: unknown) {
      throw error;
    }
  }
}
