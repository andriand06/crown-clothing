import "./Input.styles.scss";
const Input = ({ label, name, type, onChange, value }) => {
  return (
    <div className="input-wrapper">
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={name} className={value ? "input-label" : "shrink-label"}>
        {label}
      </label>
    </div>
  );
};
export default Input;
