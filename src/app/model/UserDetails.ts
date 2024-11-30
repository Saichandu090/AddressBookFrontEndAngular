export interface ILoginUser{
    userName:string;
    password:string;
}

export interface LoginResponse {
    result: boolean;
    message: string;
}


export interface IRegisterUser{
    userName:string,
    email:string,
    password:string
}