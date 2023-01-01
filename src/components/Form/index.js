import { useState, useEffect } from "react";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Input from "../Input";
import Button from "../Button";
import "./Form.styles.scss";
import { FormWrapper, ButtonWrapper } from "./Form.styles";
const Form = ({ data }) => {
  const { title, description, inputs, buttons, onSubmit } = data;
  const declareInitialFields = () => {
    let newObj = {};
    inputs.forEach(({ name }) => {
      newObj[name] = "";
    });
    return newObj;
  };
  const [errorMessage, setErrorMessage] = useState({
    signin: "",
    signup: "",
    email: "",
    password: "",
    signupEmail: "",
    signupPassword: "",
    confirmPassword: "",
  });
  const [formFields, setFormFields] = useState(declareInitialFields);
  useEffect(() => {}, [errorMessage]);
  const validateEmail = (email) => {
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;
    return regex.test(email);
  };
  const isMatch = (pass, pass2) => {
    return pass.match(pass2) && pass.length === pass2.length;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit.name === "signin") {
      try {
        setErrorMessage((prevState) => {
          return {
            ...prevState,
            submit: "",
            email: "",
            password: "",
          };
        });
        const isEmailValid = validateEmail(formFields.email);
        if (!isEmailValid) {
          setErrorMessage({
            ...errorMessage,
            email: "Please input valid email",
          });
          return;
        }
        const { user } = await onSubmit.func(
          formFields.email,
          formFields.password
        );
        if (user) {
          setErrorMessage({
            ...errorMessage,
            submit: "",
            email: "",
            password: "",
          });
        }
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          setErrorMessage((prevState) => {
            return { ...prevState, password: "Incorrect password" };
          });
          return;
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage((prevState) => {
            return { ...prevState, submit: "User not found" };
          });
          return;
        } else {
          setErrorMessage((prevState) => {
            return { ...prevState, submit: "Email not found" };
          });
        }
      }
    }
    if (onSubmit.name === "signup") {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          submit: "",
          signupEmail: "",
          signupPassword: "",
          confirmPassword: "",
        };
      });
      if (!validateEmail(formFields.signupEmail)) {
        setErrorMessage({
          ...errorMessage,
          signupEmail: "Please input valid email",
        });
      }
      if (!isMatch(formFields.signupPassword, formFields.confirmPassword)) {
        setErrorMessage((prevState) => {
          return { ...prevState, confirmPassword: "Password do not match" };
        });
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
        setErrorMessage({
          ...errorMessage,
          submit: "",
          signupEmail: "",
          signupPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage((prevState) => {
            return { ...prevState, submit: "Email already in use" };
          });
        } else if (error.code === "auth/weak-password") {
          setErrorMessage((prevState) => {
            return {
              ...prevState,
              signupPassword: "Password should be at least 6 characters",
            };
          });
        }
      }
    }
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <label>{description}</label>
        <span className={`error-message ${errorMessage.submit && "show"}`}>
          {errorMessage.submit}
        </span>
        {inputs.map(({ name, label, type }, index) => (
          <Input
            key={index}
            name={name}
            label={label}
            type={type}
            onChange={handleChange}
            value={formFields[name]}
            errorMessage={errorMessage[name]}
          />
        ))}
        <ButtonWrapper>
          {buttons.map(
            ({ buttonType, onClick, name, label, className }, index) =>
              onClick ? (
                <Button
                  key={index}
                  buttonType={buttonType}
                  onClick={onClick}
                  className={className}
                  name={name}
                  label={label}
                />
              ) : (
                <Button
                  key={index}
                  buttonType={buttonType}
                  className={className}
                  name={name}
                  label={label}
                />
              )
          )}
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default Form;
