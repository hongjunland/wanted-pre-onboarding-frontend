import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

function SigninPage() {
    const navigate = useNavigate();
    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault();
        console.log('signin');
        navigate('/todo');
    }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <HeadLine>로그인</HeadLine>
        <Input type="email" data-testid="email-input" />
        <Input type="password" data-testid="password-input" />
        <SigninButton type="submit" data-testid="signin-button">
          로그인
        </SigninButton>
        <span>
          계정이 없으신가요?<Link to="/signup">회원가입</Link>
        </span>
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
  a{
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
const SigninButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 450px;
  height: 40px;
  background-color: #4857f8;
  color: white;
  font-weight: bold;
`;
export default SigninPage;
