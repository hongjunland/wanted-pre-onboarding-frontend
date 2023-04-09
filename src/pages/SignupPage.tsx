import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { isSignFormat } from "../utils/signUtils";
import AuthContext from "../auth/AuthContext";
import FormInput from "../components/Sign/FormInput";
import Form from "../components/Sign/Form";
import FormButton from "../components/Sign/FormButton";
import useSignForm from "../hooks/useSignForm";

function SignupPage() {
  const { signForm, onChangeSignForm, onSubmitSignup } = useSignForm({
    email: "",
    password: "",
  });

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    const response = await onSubmitSignup(e);
    if (response) navigate("/signin");
  };
  useEffect(() => {
    if (isLoggedIn) {
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
        <SignupFormButton
          type="submit"
          data-testid="signup-button"
          disabled={!isSignFormat(signForm)}
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
