import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useStyles } from "../Styles/muiStyles";
import SignupLogo from "./SignupLogo";
import SignupNav from "./SignupNav";

const SignupHome = ({ lightDarkChange }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <SignupNav lightDarkChange={lightDarkChange} />
      <SignupLogo />
      <Button
        className={theme.name === 'dark' ? classes.signUpButtonDark :
        classes.signUpButtonLight}
        variant="outlined"
        onClick={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        Sign Up or Log In
      </Button>
    </>
  );
};

export default SignupHome;
