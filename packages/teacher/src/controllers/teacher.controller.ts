import StatusCode from "../utils/http-status-code";
import { TeacherServices } from "../services/teacher-services";
import { Paginate } from "../@types/paginate.type";
import { PATH_TEACHER } from "../routes/path-defs";
import { authorize } from "../middlewares/authorize";
import { TeacherValidate } from "../middlewares/teacher-validate-input";
import { teacherSchemas } from "../schemas/teacher-validate";
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
} from "tsoa";
import { ITeacher } from "../@types/teacher.type";

@Route("/v1/teachers")
export class TeacherController extends Controller {
  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_TEACHER.teacherList)
  public async TeacherList(
    @Queries() options: Paginate
  ): Promise<{ message: string; data: ITeacher[] }> {
    try {
      const service = new TeacherServices();
      const newTeacher = await service.TeacherList(options);

      return { message: "Success retrieve teachers", data: newTeacher };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_TEACHER.teacherSignup)
  @Middlewares(TeacherValidate(teacherSchemas))
  @Middlewares(authorize(["user", "teacher"]))
  public async TeacherSingup(
    @Body() requestBody: ITeacher,
    @Request() req: Express.Request
  ): Promise<{ data: ITeacher; token: string }> {
    try {
      const userId = (req.user as DecodedUser).id;

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
      return { message: "Success login",token: respone.token };
    } catch (error: unknown) {
      throw error;
    }
  }
}
