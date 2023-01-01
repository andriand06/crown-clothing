import {
  signInWithGooglePopup,
  signUpWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/user.context";
import Form from "../components/Form";
import { BUTTON_TYPE } from "../components/Button";
const Login = () => {
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    if (currentUser) window.open("/", "_self");
  }, [currentUser]);
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    window.open("/", "_self");
  };
  const loginForm = {
    title: "I already have an account",
    description: "Sign up with your email and password",
    inputs: [
      { name: "email", label: "Email", type: "text" },
      { name: "password", label: "Password", type: "password" },
    ],
    buttons: [
      {
        name: "signin",
        label: "Sign In",
        type: "submit",
        className: "sign-button",
        buttonType: BUTTON_TYPE.sign,
      },
      {
        name: "googleSignin",
        label: "Sign In with Google",
        type: "button",
        className: "sign-google-button",
        onClick: logGoogleUser,
        buttonType: BUTTON_TYPE.google,
      },
    ],
    onSubmit: {
      name: "signin",
      func: signInAuthWithEmailAndPassword,
    },
  };
  const signUpForm = {
    title: "I do not have a account",
    description: "Sign in with your email and password",
    inputs: [
      { name: "displayName", label: "Display Name", type: "text" },
      { name: "signupEmail", label: "Email", type: "text" },
      { name: "signupPassword", label: "Password", type: "password" },
      { name: "confirmPassword", label: "Confirm Password", type: "password" },
    ],
    buttons: [
      {
        name: "signup",
        label: "Sign Up",
        type: "submit",
        className: "sign-button",
        buttonType: BUTTON_TYPE.sign,
      },
    ],
    onSubmit: {
      name: "signup",
      func: signUpWithEmailAndPassword,
    },
  };
  return (
    <>
      <div className="wrapper">
        <Form data={loginForm} />
        <Form data={signUpForm} />
      </div>
    </>
  );
};
export default Login;
