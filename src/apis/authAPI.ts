import instance from ".";
import { SignFormData, SignInResponse } from "./types";

async function signinWithEmailandPassword(signinFormData: SignFormData): Promise<SignInResponse>{
    const response = await instance.post('/auth/signin', signinFormData);
    console.log(response.data);
    return response.data;
};

async function signupWithEmailandPassword(signinFormData: SignFormData): Promise<boolean>{
    const response = await instance.post('/auth/signup', signinFormData);
    console.log(response);
    if(response.status===201) return true;
    return false;
};


export const authAPI = {signinWithEmailandPassword, signupWithEmailandPassword};
