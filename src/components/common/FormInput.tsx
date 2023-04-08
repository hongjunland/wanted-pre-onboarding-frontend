import styled from "@emotion/styled";
interface FormInputProps {
  type: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
function FormInput({ type, value, name, onChange, ...rest }: FormInputProps) {
  return <StyledInput type={type} value={value} name={name} onChange={onChange} {...rest} />;
}
const StyledInput = styled.input`
  width: 450px;
  height: 40px;
  margin-top: 1rem;
  border: 1px solid;
  background-color: white;
`;

export default FormInput;
