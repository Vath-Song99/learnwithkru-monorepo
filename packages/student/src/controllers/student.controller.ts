import { Student } from "../@types/student.type";
import { StudentServices } from "../services/student-services";
import {
  Body,
  Controller,
  Middlewares,
  Post,
  Route,
  SuccessResponse,
  Request,
} from "tsoa";
import StatusCode from "../utils/http-status-code";
import { PATH_STUDENT } from "../routes/path-defs";
import { authorize } from "../middlewares/authorize";
import { DecodedUser } from "../@types/express-extend.type";

@Route("/v1/students")
export class StudentController extends Controller {
  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_STUDENT.SIGNUP)
  @Middlewares(authorize(["student", "user"]))
  async Signup(
    @Body() requestBody: Student,
    @Request() req: Express.Request
  ): Promise<{ message: string; data: object; token: string }> {
    const decodeId = (req.user as DecodedUser).id;
    const student = { decodeId, ...requestBody };
    try {
      const service = new StudentServices();
      const newStudent = await service.Signup(student);

      return {
        message: "Success Signup",
        data: newStudent.data,
        token: newStudent.token,
      };
    } catch (error: unknown) {
      throw error;
    }
  }
}
