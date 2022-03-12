import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  StyledNavLink,
  StyledNavbar,
  //LogoPlaceholder,
} from "../Styles/styledElements";
import AuthNav from "../auth/auth-nav";
import { Button } from "@material-ui/core";
import { FaUserAstronaut, FaCloudSun } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoIosCloudyNight } from "react-icons/io";
import MainLogo from "./MainLogo";

const BasicNav = ({ lightDarkChange }) => {
  const theme = useContext(ThemeContext);

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
        <Button
          startIcon={
            theme.name === "light" ? (
              <IoIosCloudyNight style={{ color: "#00afc9" }} />
            ) : (
              <FaCloudSun style={{ color: "#d4af37" }} />
            )
          }
          onClick={lightDarkChange}
          size="medium"
        ></Button>{" "}
        <Button
          startIcon={
            <StyledNavLink to="/profile">
              <FaUserAstronaut />
            </StyledNavLink>
          }
          size="medium"
        ></Button>
        <AuthNav />
        <MainLogo /> 
      </StyledNavbar>
      
    </>
  );
};

export default BasicNav;
