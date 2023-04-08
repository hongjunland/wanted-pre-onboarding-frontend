import styled from "@emotion/styled";
interface FormInputProps {
  type: string;
}
function FormInput({ type, ...rest }: FormInputProps) {
  return <StyledInput type={type} {...rest} />;
}
const StyledInput = styled.input`
  width: 450px;
  height: 40px;
  margin-top: 1rem;
  border: 1px solid;
  background-color: white;
`;

export default FormInput;
