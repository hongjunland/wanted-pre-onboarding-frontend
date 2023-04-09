import instance from ".";
import { SignForm, SignInResponse } from "../types/SignForm";

async function signinWithEmailandPassword(signinFormData: SignForm): Promise<SignInResponse>{
    const response = await instance.post('/auth/signin', signinFormData);
    console.log(response.data);
    return response.data;
};

async function signupWithEmailandPassword(signinFormData: SignForm): Promise<boolean>{
    const response = await instance.post('/auth/signup', signinFormData);
    console.log(response);
    if(response.status===201) return true;
    return false;
};


export const authAPI = {signinWithEmailandPassword, signupWithEmailandPassword};
