import { IUser } from "../@types/user.type";
import { UserRepository } from "../database/repositories/user.repository";
import { ApiError, BaseCustomError } from "../error/base-custom-error";
import StatusCode from "../utils/http-status-code";
import { logger } from "../utils/logger";

export class UserServices {
  public UserRepo: UserRepository;
  constructor() {
    this.UserRepo = new UserRepository();
  }
  async CreateUser({
    authId,
    firstname,
    lastname,
    email,
    picture,
  }: IUser): Promise<IUser> {
    // TODO
    // 1. encrypt token
    // 2. make requst to get auth user in auth service database
    // 3. create new user in database
    try {
      const existingUser = await this.UserRepo.FindAuthUser(authId as string);

      if (existingUser) {
        throw new BaseCustomError(
          "User is exist in database!",
          StatusCode.BAD_REQUEST
        );
      }
      // step 3
      const newUser = await this.UserRepo.CreateUser({
        authId: authId as string,
        firstname,
        lastname,
        email,
        picture,
      });

      return newUser;
    } catch (error: unknown) {
      if (error instanceof BaseCustomError) {
        throw error;
      }
      logger.error(
        "An unexpected error occurred while retrieving the user in CreateUser() method!",
        error
      );
      throw new ApiError(
        "An unexpected error occurred while creating the user."
      );
    }
  }

  async GetUserByAuthId(authId: string) {
    try {
      const user = await this.UserRepo.FindAuthUser(authId);

      if (!user) {
        throw new ApiError("Unable to find user in database!");
      }
      return user;
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        "An unexpected error occurred while retrieving the user in GetUserByAuthId() method!",
        error
      );
      throw new ApiError(
        "An unexpected error occurred while retreive the user."
      );
    }
  }
  async GetUserByUserId(userId: string): Promise<IUser> {
    try {
      const user = (await this.UserRepo.FindUser(userId)) as IUser;

      console.log(user);
      if (!user) {
        throw new ApiError("Unable to find user in database!");
      }

      return user;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        "An unexpected error occurred while retrieving the user in GetUserByUserId() method!",
        error
      );
      throw new ApiError(
        "An unexpected error occurred while retrieving the user."
      );
    }
  }
}
