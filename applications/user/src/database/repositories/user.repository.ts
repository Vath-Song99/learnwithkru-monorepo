import { IUser, UserUpdate } from "../../@types/user.type";
import { ApiError } from "../../error/base-custom-error";
import { UserModel } from "../models/user.model";

export class UserRepository {
  async CreateUser({ first_name, last_name, email, authId, picture }: IUser) {
    try {
      const newUser = await UserModel.create({
        authId,
        first_name,
        last_name,
        email,
        picture,
      });

      console.log("This is repo data", newUser);
      if (!newUser) {
        throw new ApiError("Unable to create User in db!");
      }
      return await newUser.save();
    } catch (error: unknown) {
      throw error;
    }
  }

  //by User Id
  async FindUser(userId: string) {
    try {
      const user = await UserModel.findOne({
        _id: userId,
      });
      return user;
    } catch (error: unknown) {
      throw error;
    }
  }

  // bu authId
  async FindAuthUser(authId: string) {
    try {
      const User = await UserModel.findOne({
        authId: authId,
      });
      return User;
    } catch (error: unknown) {
      throw error;
    }
  }

  async UpdateUser(authId: string, userUpdate: UserUpdate) {
    try {
      const updatedUser = await UserModel.findOneAndUpdate(
        { authId },
        { $set: userUpdate },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        throw new ApiError("Unable to update user in database!");
      }

      return updatedUser;
    } catch (error: unknown) {
      throw new ApiError(`Failed to update user: ${error}`);
    }
  }

  async DeleteUser(userId: string) {
    try {
      const deletedUser = await UserModel.findByIdAndDelete({ _id: userId });
      if (!deletedUser?.$isDeleted) {
        throw new ApiError("Unable to delete user in database!");
      }
    } catch (error: unknown) {
      throw error;
    }
  }
}
