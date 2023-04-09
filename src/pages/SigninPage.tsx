import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Sign/Form";
import { useContext, useEffect } from "react";
import { isSignFormat } from "../utils/signUtils";
import AuthContext from "../auth/AuthContext";
import FormInput from "../components/Sign/FormInput";
import FormButton from "../components/Sign/FormButton";
import useSignForm from "../hooks/useSignForm";
function SigninPage() {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { signForm, onChangeSignForm, onSubmitSignin } = useSignForm({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.SyntheticEvent) => {
    await onSubmitSignin(e);
    setLoggedIn(true);
    navigate("/todo");
  };

  useEffect(() => {
    if (isLoggedIn) {
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
          value={signForm.email}
          onChange={onChangeSignForm}
        />
        <FormInput
          type="password"
          name="password"
          data-testid="password-input"
          value={signForm.password}
          onChange={onChangeSignForm}
        />
        <SigninFormButton
          type="submit"
          data-testid="signin-button"
          disabled={!isSignFormat(signForm)}
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
