import "./Input.styles.scss";
const Input = ({ label, name, type, onChange, value, errorMessage }) => {
  return (
    <div className="input-wrapper">
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
      <label htmlFor={name} className={value ? "input-label" : "shrink-label"}>
        {label}
      </label>
      <span className={`error-span ${errorMessage && "show"}`}>
        {errorMessage}
      </span>
    </div>
  );
};
export default Input;
