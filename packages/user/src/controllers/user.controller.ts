import StatusCode from "../utils/http-status-code";
import { PATH_USER } from "../routes/path-defs";
import { UserServices } from "../services/user-services";
import { IUser } from "../@types/user.type";
import { Body, Controller, Get, Path, Post, Route, SuccessResponse } from "tsoa";

@Route("/v1/users")
export class UserController extends Controller {

  @SuccessResponse(StatusCode.CREATED, "Created")
  @Post("/create")
  async Createuser(
    @Body() requestBody: IUser
  ): Promise<{ message: string; data: IUser }> {
    console.log(requestBody);
    const { authId, firstname, lastname, email, picture } = requestBody;
    try {
      console.log("This is authId", authId);
      const service = new UserServices();
      const newUser = await service.CreateUser({
        authId,
        firstname,
        lastname,
        email,
        picture,
      });

      return { message: "Success Created", data: newUser };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_USER.GET_USER_BY_AUTH_ID)
  async GetUserByAuthId(
    @Path() authId: string
  ): Promise<{ message: string; data: IUser }> {
    try {
      const service = new UserServices();
      const user = await service.GetUserByAuthId(authId);

      return { message: "Success retrieve user", data: user };
    } catch (error: unknown) {
      throw error;
    }
  }
  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_USER.GET_USER_BY_USER_ID)
  async GetUserByUserId(
    @Path() userId: string
  ): Promise<{ message: string; data: IUser }> {
    try {
      const service = new UserServices();
      const user = (await service.GetUserByUserId(userId)) as IUser;
      return { message: "Success retrieve user", data: user };
    } catch (error: unknown) {
      throw error;
    }
  }
}
