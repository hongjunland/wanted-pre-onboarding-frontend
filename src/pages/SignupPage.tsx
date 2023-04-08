import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/common/FormInput";
import FormButton from "../components/common/FormButton";
import Form from "../components/common/Form";

function SignupPage() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signin");
    navigate('/signin');
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit} title="회원가입">
        <FormInput type="email" data-testid="email-input" />
        <FormInput type="password" data-testid="password-input" />
        <SignupFormButton type="submit" data-testid="signup-button">
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
