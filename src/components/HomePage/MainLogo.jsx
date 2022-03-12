import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import DarkNavLogo from "../../media/ChainPaddleDarkIcon.png";
import LightNavLogo from "../../media/ChainPaddleLightIcon.png";
import { NavLogoContainer } from "../Styles/styledElements";

const MainLogo = () => {
  const theme = useContext(ThemeContext);
  return (
    <NavLogoContainer>
      <img
        src={theme.name === "dark" ? DarkNavLogo : LightNavLogo}
        alt="Logo"
      />
    </NavLogoContainer>
  );
};

export default MainLogo;
