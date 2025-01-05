import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/user/user.action";

import { SignUpContainer, StyledHeading } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormsFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn/t match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      setFormsFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormsFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <StyledHeading>Don't have an account</StyledHeading>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <FormInput
          label="Confirm password"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
