import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles.jsx";

const BUTTON_TYPES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

function Button({ children, buttonType = "base", ...otherProps }) {
  const Button = BUTTON_TYPES[buttonType];

  return <Button {...otherProps}>{children}</Button>;
}

export default Button;
