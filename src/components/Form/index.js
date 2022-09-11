import { useState } from "react";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import Input from "../Input";
import Button from "../Button";
import "./Form.styles.scss";

const Form = ({ data }) => {
  const { title, description, inputs, buttons, onSubmit } = data;
  const declareInitialFields = () => {
    let newObj = {};
    inputs.forEach(({ name }) => {
      newObj[name] = "";
    });
    return newObj;
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [formFields, setFormFields] = useState(declareInitialFields);
  console.log(formFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit.name === "signin") {
      try {
        const { user } = await onSubmit.func(
          formFields.email,
          formFields.password
        );
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
    if (onSubmit.name === "signup") {
      if (formFields.signupPassword !== formFields.confirmPassword) {
        setErrorMessage("Password do not match");
        return;
      }
      try {
        const { user } = await onSubmit.func(
          formFields.signupEmail,
          formFields.signupPassword
        );
        createUserDocumentFromAuth(user, {
          displayName: formFields.displayName,
        });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Email already in use");
        }
        console.log(error);
      }
    }
  };
  return (
    <>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <label>{description}</label>
        <span className="error-message">{errorMessage}</span>
        {inputs.map(({ name, label, type }, index) => (
          <Input
            key={index}
            name={name}
            label={label}
            type={type}
            onChange={handleChange}
            value={formFields[name]}
          />
        ))}
        <div className="button-wrapper">
          {buttons.map(({ onClick, name, label, className, type }, index) =>
            onClick ? (
              <Button
                key={index}
                type={type}
                onClick={onClick}
                className={className}
                name={name}
                label={label}
              />
            ) : (
              <Button
                key={index}
                type="submit"
                className={className}
                name={name}
                label={label}
              />
            )
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
