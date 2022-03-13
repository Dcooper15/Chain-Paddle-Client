import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import DarkSignUpLogo from "../../media/ChainPaddleSignUpLogoDark3D.png";
import LightSignUpLogo from "../../media/ChainPaddleSignUpLogoLight3D.png";
import { SignupLogoContainer, StyledSignUpLogo } from "../Styles/styledElements";

const SignupLogo = () => {
  const theme = useContext(ThemeContext);
  return (
    <SignupLogoContainer>
      <StyledSignUpLogo
        src={theme.name === "dark" ? DarkSignUpLogo : LightSignUpLogo}
        alt="Logo"
        
      />
    </SignupLogoContainer>
  );
};

export default SignupLogo;
