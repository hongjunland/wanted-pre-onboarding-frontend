import styled from "@emotion/styled";
interface FormButtonProps {
  children: React.ReactNode;
  type: 'button'|'submit'|'reset';
  disabled?: boolean;
  onClick?: ()=>void
}
function FormButton({ children, type, disabled, onClick, ...rest }: FormButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} {...rest}>
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
  &:disabled{
    background-color: #888;
  }
`;
export default FormButton;
