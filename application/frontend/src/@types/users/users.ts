interface CardTeachersTypes {
  id?: string;
  item?: string | undefined;
  imageUrl?: string;
  nameSubject?: string;
  teacherName?: string;
  rateStars?: number;
  reviews?: number;
  students?: number;
  description?: string;
  pricing?: number;
  favorite?: boolean;
}

export interface AuthModel {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
}
export interface UserContextType {
  auth: AuthModel[];
  addNewAuth: (auth: AuthModel) => void;
  rememberMe: boolean;
  setRememberMe: React.Dispatch<boolean>;
}

export type AuthForm = Omit<AuthModel, "id">;

export type { CardTeachersTypes };

// handle login

export interface UsersLogin {
  email: string;
  password: string;
}

export interface UserLoginContextType {
  usersLogin: UsersLogin[];
  rememberMe: boolean;
  setRememberMe: React.Dispatch<boolean>;
  addLoginUsers: (usersLogin: UsersLogin) => void;
}

export type UsersFormLogin = Omit<UsersLogin, "id">;
