export interface LoginModel{
    email:string;
    password:string;
}

export interface LoginResponseModel{
    message:string;
    role:string;
    token:string;
}

export interface RegisterModel{
    name:string;
    email:string;
    password:string;
}

export interface HttpSuccessResponse{
    message:string;
}