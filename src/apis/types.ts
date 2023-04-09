export interface SignFormData {
    email: string;
    password: string;
}

export interface SignInResponse{
    access_token: string;
}
export interface TodoCreateFormData{
    todo: string;
}
export interface TodoCreateResponse{
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}
