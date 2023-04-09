import { useCallback, useState } from "react";
import { SignForm } from "../types/SignForm";
import { authAPI } from "../apis/authAPI";
import { setAccessToken } from "../utils/authUtils";

function useSignForm(defaultForm: SignForm) {
  const [signForm, setSignForm] = useState<SignForm>(defaultForm);

  const onChangeSignForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignForm({ ...signForm, [name]: value });
    },
    [signForm]
  );

  const onSubmitSignin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signin");
    const response = await authAPI.signinWithEmailandPassword(signForm);
    setAccessToken(response.access_token);
  };
  const onSubmitSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signup");
    const response = await authAPI.signupWithEmailandPassword(signForm);
    return response;
  };
  return { signForm, onChangeSignForm, onSubmitSignin, onSubmitSignup };
}


export default useSignForm;
