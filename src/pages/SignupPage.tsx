import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { isSignFormat } from "../utils/signUtils";
import { authAPI } from "../apis/authAPI";
import AuthContext from "../auth/AuthContext";
import FormInput from "../components/Sign/FormInput";
import Form from "../components/Sign/Form";
import FormButton from "../components/Sign/FormButton";
import { SignForm } from "../types/SignForm";

function SignupPage() {
  const [signinFormState, setSigninFormState] = useState<SignForm>({
    email: "",
    password: "",
  });
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async(e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signin");
    const response = await authAPI.signupWithEmailandPassword(signinFormState);
    console.log(response);
    if(response) navigate("/signin");
  };
  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setSigninFormState({ ...signinFormState, email: e.target.value });
        break;
      case "password":
        setSigninFormState({ ...signinFormState, password: e.target.value });
        break;
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      alert("로그인중입니다!");
      navigate("/todo");
    }
  }, [isLoggedIn, navigate]);
  return (
    <Container>
      <Form onSubmit={handleSubmit} title="회원가입">
        <FormInput
          type="email"
          data-testid="email-input"
          name="email"
          value={signinFormState.email}
          onChange={handleFormStateChange}
        />
        <FormInput
          type="password"
          name="password"
          data-testid="password-input"
          value={signinFormState.password}
          onChange={handleFormStateChange}
        />
        <SignupFormButton
          type="submit"
          data-testid="signup-button"
          disabled={!isSignFormat(signinFormState)}
        >
          회원가입
        </SignupFormButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 800px;
  margin: auto auto;
  justify-content: center;
`;

const SignupFormButton = styled(FormButton)`
  background-color: #111;
`;

export default SignupPage;
