import styled from "@emotion/styled";
interface FormButtonProps {
  children: React.ReactNode;
  type: 'button'|'submit'|'reset';
  onClick?: ()=>void
}
function FormButton({ children, type, onClick, ...rest }: FormButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 450px;
  height: 40px;
  background-color: #111;
  color: white;
  font-weight: bold;
`;
export default FormButton;
