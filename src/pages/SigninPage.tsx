import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/common/Form";
import FormInput from "../components/common/FormInput";
import FormButton from "../components/common/FormButton";

function SigninPage() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signin");
    navigate("/todo");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit} title="로그인">
        <FormInput type="email" data-testid="email-input" />
        <FormInput type="password" data-testid="password-input" />
        <SigninFormButton type="submit" data-testid="signin-button">
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
