import React from "react";
import { StyledNavbar } from "../Styles/styledElements";
import MainLogo from "../HomePage/MainLogo";
import LightDarkToggle from "../HomePage/LightDarkToggle";

const SignupNav = ({ lightDarkChange }) => {
  return (
    <>
      <StyledNavbar>
        <LightDarkToggle lightDarkChange={lightDarkChange} />
        <MainLogo />
      </StyledNavbar>
    </>
  );
};

export default SignupNav;
