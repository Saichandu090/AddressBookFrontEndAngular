export interface IUser{
    username:string;
    password:string;
}

export interface LoginResponse {
    result: boolean;
    message?: string;
    data?: { token: string };
  }