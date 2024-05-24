import { ResetPassword, User } from "../../@types/user.type";

export interface AuthService extends User{
    
}

export interface GoogleOauth extends User{
    googleId: string
    verified_email: boolean
}

export interface UserService extends User {
    picture?: string | null;
    authId: string
}

export interface ResetPasswordService extends ResetPassword{
    token: string
}