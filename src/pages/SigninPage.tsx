import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Sign/Form";
import { useContext, useEffect, useState } from "react";
import SignForm from "../types/SignForm";
import { isSignFormat } from "../utils/signUtils";
import { getAccessToken, setAccessToken } from "../utils/authUtils";
import { authAPI } from "../apis/authAPI";
import AuthContext from "../auth/AuthContext";
import FormInput from "../components/Sign/FormInput";
import FormButton from "../components/Sign/FormButton";
function SigninPage() {
  const [signinFormState, setSigninFormState] = useState<SignForm>({
    email: "",
    password: "",
  });
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signin");
    const response = await authAPI.signinWithEmailandPassword(signinFormState);
    setAccessToken(response.access_token);
    setLoggedIn(true);
    navigate("/todo");
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
      <Form onSubmit={handleSubmit} title="로그인">
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
        <SigninFormButton
          type="submit"
          data-testid="signin-button"
          disabled={!isSignFormat(signinFormState)}
        >
          로그인
        </SigninFormButton>
        <SignupSpan>
          계정이 없으신가요?
          <Link to="/signup">회원가입</Link>
        </SignupSpan>
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
const SigninFormButton = styled(FormButton)`
  background-color: #4857f8;
`;
const SignupSpan = styled.span`
  a {
    font-weight: bold;
    color: blue;
  }
`;
export default SigninPage;
