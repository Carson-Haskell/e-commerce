import SignUpForm from "../../components/sign-up/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";
import { AuthContainer } from "./Auth.styles.jsx";

function Auth() {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
}

export default Auth;
