import { zodValidate } from "../middlewares/user-validate-middleware";
import { PATH_AUTH } from "../routes/path-defs";
import { authLoginSchema, userValidateSchema } from "../schemas/auth-validate";
import { AuthServices } from "../services/auth-services";
import StatusCode from "../utils/http-status-code";
import { IUser, Login, ResetPassword, UserSignup } from "../@types/user.type";
import {
  Get,
  Post,
  Route,
  SuccessResponse,
  Middlewares,
  Body,
  Query,
  Controller,
  Header,
} from "tsoa";
import { SendVerifyEmailService } from "../services/verify-email-services";
import { OauthConfig } from "../utils/oauth-configs";

@Route("/v1/auth")
export class AuthController extends Controller {
  @Post(PATH_AUTH.signUp)
  @SuccessResponse(StatusCode.CREATED, "Created")
  @Middlewares(zodValidate(userValidateSchema))
  public async Singup(
    @Body() requestBody: UserSignup
  ): Promise<{ message: string }> {
    const { firstname, lastname, email, password } = requestBody;
    try {
      const authService = new AuthServices();
      await authService.Signup({ firstname, lastname, email, password });

      return { message: "please verify your Email!" };
    } catch (error) {
      throw error;
    }
  }

  @Get(PATH_AUTH.verify)
  @SuccessResponse(StatusCode.OK, "OK")
  public async VerifySignupEmail(
    @Query() token: string
  ): Promise<{ message: string; data: IUser; token: string }> {
    try {
      const verifyService = new SendVerifyEmailService();
      const user = await verifyService.VerifyEmailToken(token);

      const { firstname, lastname, email, picture } = user.data;
      return {
        message: "Success verified",
        data: { firstname, lastname, email, picture },
        token: user.token,
      };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Get(PATH_AUTH.verifyResetPassword)
  async VerifyResetPasswordEmail(
    @Query() token: string
  ): Promise<{ message: string }> {
    try {
      const verifyService = new SendVerifyEmailService();
      const user = await verifyService.VerifyResetPasswordToken(token);

      return user;
    } catch (error: unknown) {
      throw error;
    }
  }

  @Post(PATH_AUTH.login)
  @SuccessResponse(StatusCode.OK, "OK")
  @Middlewares(zodValidate(authLoginSchema))
  public async Login(
    @Body() requestBody: Login
  ): Promise<{ message: string; data: IUser; token: string }> {
    try {
      const authService = new AuthServices();
      const user = await authService.Login(requestBody);

      const { firstname, lastname, email, picture } = user.data as IUser;
      return {
        message: "Success login",
        data: { firstname, lastname, email, picture },
        token: user.token,
      };
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.FOUND, "FOUND")
  @Get(PATH_AUTH.googleOAuth)
  public async googleOAuth(): Promise<{ redirectUrl: string }> {
    const redirectUri = process.env.GOOGLE_REDIRECT_URI as string;
    const clientId = process.env.GOOGLE_CLIENT_ID as string;

    try {
      const googleConfig = await OauthConfig.getInstance();
      const authUrl = await googleConfig.GoogleConfigUrl(clientId, redirectUri);
      return { redirectUrl: authUrl };
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.FOUND, "FOUND")
  @Get(PATH_AUTH.facebookOAuth)
  public async facebookOAuth(): Promise<{ redirectUrl: string }> {
    const redirectUri = process.env.FACEBOOK_APP_ID as string;
    const clientId = process.env.FACEBOOK_APP_SECRET as string;

    try {
      const googleConfig = await OauthConfig.getInstance();
      const authUrl = await googleConfig.GoogleConfigUrl(clientId, redirectUri);
      return { redirectUrl: authUrl };
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_AUTH.googleOAuthCallBack)
  async GoogleOAuth(
    @Query() code: string
  ): Promise<{ message: string; data: IUser; token: string }> {
    try {
      const authService = new AuthServices();
      const user = await authService.SigninWithGoogleCallBack(code);

      const { firstname, lastname, email, picture } = user.data as IUser;
      return {
        message: "Success signup",
        data: { firstname, lastname, email, picture },
        token: user.token,
      };
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_AUTH.facebookOAuthCallBack)
  async FacebookOAuth(
    @Query() code: string
  ): Promise<{ message: string; data: IUser; token: string }> {
    try {
      const authService = new AuthServices();
      const user = await authService.SigninWithFacebookCallBack(code);

      const { firstname, lastname, email, picture } = user.data;
      return {
        message: "Success signup",
        data: { firstname, lastname, email, picture },
        token: user.token,
      };
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_AUTH.requestResetPassword)
  async RequestResetPassword(
    @Body() requestBody: { email: string }
  ): Promise<{ message: string }> {
    const { email } = requestBody;
    try {
      const service = new AuthServices();
      await service.RequestResetPassword({ email });
      return { message: "Success verified" };
    } catch (error: unknown) {
      throw error;
    }
  }

  @SuccessResponse(StatusCode.OK, "OK")
  @Post(PATH_AUTH.ResetPassword)
  async ConfirmResetPassword(
    @Body() requestBody: ResetPassword,
    @Header("authorization") token: string
  ): Promise<{ message: string }> {
    const userData = { token, ...requestBody };
    try {
      const service = new AuthServices();
      await service.ConfirmResetPassword(userData);

      return { message: "Success reset password" };
    } catch (error: unknown) {
      throw error;
    }
  }
}
