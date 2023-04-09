import styled from "@emotion/styled";
interface FormProps {
  children: React.ReactNode;
  title?: string;
  onSubmit: (e:React.SyntheticEvent) => void;
}
function Form({ children, title, onSubmit, ...rest }: FormProps) {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      <h1>{title}</h1>
      {children}
    </StyledForm>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  text-align: center;
`;

export default Form;
