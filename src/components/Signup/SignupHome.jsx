import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useStyles } from "../Styles/muiStyles";
import AuthNav from "../auth/auth-nav";
import SignupNav from "./SignupNav";

const SignupHome = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <SignupNav />
      <AuthNav />
      <Button
        className={classes.signUpButtonDark}
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
