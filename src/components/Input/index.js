import "./Input.styles.scss";
import { InputWrapper, ErrorWrapper, InputLabel } from "./Input.styles";
const Input = ({ label, name, type, onChange, value, errorMessage }) => {
  return (
    <InputWrapper>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
        autoComplete="new-password"
      />
      <InputLabel htmlFor={name} shrink={value.length}>
        {label}
      </InputLabel>
      <ErrorWrapper isError={errorMessage && errorMessage.length}>
        {errorMessage}
      </ErrorWrapper>
    </InputWrapper>
  );
};
export default Input;
