import StatusCode from "../utils/http-status-code";
import { PATH_USER } from "../routes/path-defs";
import { UserServices } from "../services/user-services";
import { IUser } from "../@types/user.type";
import { Body, Get, Path, Post, Route, SuccessResponse } from "tsoa";

@Route("/v1/users")
export class UserController {
  @SuccessResponse(StatusCode.CREATED, "Created")
  @Post(PATH_USER.CREATE_USER)
  async Createuser(
    @Body() requestBody: IUser
  ): Promise<{ message: string; data: IUser }> {
    const { authId, firstname, lastname, email, picture } = requestBody;
    try {
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
