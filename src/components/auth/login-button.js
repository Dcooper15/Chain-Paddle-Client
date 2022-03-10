// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledLoginButton } from "../Styles/styledElements";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledLoginButton
      variant="outlined"
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In/Sign Up
    </StyledLoginButton>
  );
};

export default LoginButton;
