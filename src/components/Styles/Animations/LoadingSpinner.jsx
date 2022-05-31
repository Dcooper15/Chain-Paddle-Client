import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import SpinnerLight from "../../../media/ChainPaddle-Loading-Spinner-Light.png";
import SpinnerDark from "../../../media/ChainPaddle-GoogleLogo.png";
import "./Animations.css";

const LoadingSpinner = () => {
  const theme = useContext(ThemeContext);
  return (
    <img
      className="rotate"
      src={theme.name === "dark" ? SpinnerDark : SpinnerLight}
      alt="Spinner"
    />
  );
};

export default LoadingSpinner;
