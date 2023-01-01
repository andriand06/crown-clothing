import { ButtonWrapper, SignButton, SignGoogleButton } from "./Button.styles";
export const BUTTON_TYPE = {
  base: "base",
  sign: "sign",
  google: "google",
};
const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: ButtonWrapper,
    [BUTTON_TYPE.sign]: SignButton,
    [BUTTON_TYPE.google]: SignGoogleButton,
  }[buttonType]);
const Button = ({ buttonType, className, name, label, onClick }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton onClick={onClick} className={className} name={name}>
      {label}
    </CustomButton>
  );
};

export default Button;
