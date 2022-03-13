import React from "react";
import { StyledNavLink, StyledNavbar } from "../Styles/styledElements";
import LightDarkToggle from "./LightDarkToggle";
import { Button } from "@material-ui/core";
import { FaUserAstronaut } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

import MainLogo from "./MainLogo";

const BasicNav = ({ lightDarkChange }) => {
  return (
    <>
      <StyledNavbar>
        <Button
          startIcon={
            <StyledNavLink to="/">
              <IoHome />
            </StyledNavLink>
          }
          size="medium"
        ></Button>
        <LightDarkToggle lightDarkChange={lightDarkChange} />
        <Button
          startIcon={
            <StyledNavLink to="/profile">
              <FaUserAstronaut />
            </StyledNavLink>
          }
          size="medium"
        ></Button>

        <MainLogo />
      </StyledNavbar>
    </>
  );
};

export default BasicNav;
