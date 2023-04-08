import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signin");
    navigate('/signin');
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <HeadLine>회원가입</HeadLine>
        <Input type="email" data-testid="email-input" />
        <Input type="password" data-testid="password-input" />
        <SignupButton type="submit" data-testid="signup-button">
          회원가입
        </SignupButton>
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
const HeadLine = styled.h1`
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto auto;
  text-align: center;
  a {
    color: blue;
    text-decoration: none;
    font-weight: bold;
  }
`;
const Input = styled.input`
  width: 450px;
  height: 40px;
  margin-top: 1rem;
  border: 1px solid;
  background-color: white;
`;
const SignupButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 450px;
  height: 40px;
  background-color: #111;
  color: white;
  font-weight: bold;
`;
export default SignupPage;
