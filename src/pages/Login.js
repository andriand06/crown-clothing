import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signUpWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import Form from "../components/Form";
const Login = () => {
  // useEffect(() => {
  //   async function logRedirectResult() {
  //     //get redirect result from the authentication method (redirect method)
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   logRedirectResult();
  // }, []);
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  const loginForm = {
    title: "I already have an account",
    description: "Sign up with your email and password",
    inputs: [
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
    buttons: [
      {
        name: "signin",
        label: "Sign In",
        type: "submit",
        className: "sign-button",
      },
      {
        name: "googleSignin",
        label: "Sign In with Google",
        type: "button",
        className: "sign-google-button",
        onClick: logGoogleUser,
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
      { name: "signupEmail", label: "Email", type: "email" },
      { name: "signupPassword", label: "Password", type: "password" },
      { name: "confirmPassword", label: "Confirm Password", type: "password" },
    ],
    buttons: [
      {
        name: "signup",
        label: "Sign Up",
        type: "submit",
        className: "sign-button",
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
