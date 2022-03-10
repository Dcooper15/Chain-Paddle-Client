import React from "react";
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
//import MainLogo from "./MainLogo";

const BasicNav = ({ lightDarkChange, theme }) => {
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
            theme === "light" ? (
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
              <FaUserAstronaut
                style={{ color: theme === "light" ? "#00afc9" : "#d4af37" }}
              />
            </StyledNavLink>
          }
          size="medium"
        ></Button>
        <AuthNav />
        {/* <MainLogo /> */}
      </StyledNavbar>
    </>
  );
};

export default BasicNav;
