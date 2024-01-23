import { useState } from "react";
import "./SignIn.styles.scss";
import {
  createUserDocument,
  signIn,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../button/Button";

import "./SignIn.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signIn(email, password);
      setFormFields(defaultFormFields);

      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with that email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="sign-in-buttons">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={handleGoogleSignIn}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
