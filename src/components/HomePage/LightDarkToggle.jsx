import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "@material-ui/core";
import { FaCloudSun } from "react-icons/fa";
import { IoIosCloudyNight } from "react-icons/io";

const LightDarkToggle = ({ lightDarkChange }) => {
  const theme = useContext(ThemeContext);
  return (
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
    ></Button>
  );
};

export default LightDarkToggle;
