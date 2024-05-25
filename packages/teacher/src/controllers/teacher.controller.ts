import {
  SuccessResponse,
  Get,
  Queries,
  Post,
  Middlewares,
  Controller,
  Body,
  Request,
} from "tsoa";
import StatusCode from "../utils/http-status-code";
import { TeacherServices } from "../services/teacher-services";
import { Paginate } from "../@types/paginate.type";
import { Teacher } from "../@types/teacher.type";
import { PATH_TEACHER } from "../routes/path-defs";
import { authorize } from "../middlewares/authorize";
import { TeacherValidate } from "../middlewares/teacher-validate-input";
import { teacherSchemas } from "../schemas/teacher-validate";
import { DecodedUser } from "../@types/express-extend.type";

export class TeacherController extends Controller {
  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_TEACHER.teacherList)
  public async TeacherList(@Queries() options: Paginate) {
    try {
      const service = new TeacherServices();
      const newTeacher = await service.TeacherList(options);

      return newTeacher;
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_TEACHER.teacherSignup)
  @Middlewares(TeacherValidate(teacherSchemas))
  @Middlewares(authorize(["user", "teacher"]))
  public async TeacherSingup(
    @Body() requestBody: Teacher,
    @Request() req: Express.Request
  ) {
    try {
      const userId = (req.user as DecodedUser).id;
      const teacherInfo = { userId, ...requestBody };

      const service = new TeacherServices();
      const newUser = await service.CreateTeacher(teacherInfo);

      return newUser;
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_TEACHER.teacherProfile)
  async FindOneTeacher({ _id }: { _id: string }) {
    try {
      const service = new TeacherServices();
      const teacher = await service.FindOneTeacher({ _id });
      return teacher;
    } catch (error: unknown) {
      throw error;
    }
  }
}
