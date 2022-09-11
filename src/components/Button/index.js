import "./Button.styles.scss";
const Button = ({ type = "button", className, name, label, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={className} name={name}>
      {label}
    </button>
  );
};

export default Button;
