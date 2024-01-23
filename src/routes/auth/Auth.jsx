import SignUpForm from "../../components/sign-up/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";
import "./Auth.styles.scss";

function Auth() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Auth;
