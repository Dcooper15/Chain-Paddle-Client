import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonGroupContainer } from "../Styles/styledElements";
import { ButtonGroup, Button } from "@material-ui/core";
import { useStyles } from "../Styles/muiStyles";
const CallPutButtonGroup = ({ isCall, handleIsCall }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();

  const getPutButtonClass = (theme, call) => {
    if (call === false && theme === "dark") {
      return classes.moreDataButtonDarkActive;
    } else if (call === false && theme === "light") {
      return classes.moreDataButtonLightActive;
    } else if (call !== false && theme === "dark") {
      return classes.moreDataButtonDark;
    } else if (call !== false && theme === "light") {
      return classes.moreDataButtonLight;
    }
  };
  const getCallButtonClass = (theme, call) => {
    if (call === true && theme === "dark") {
      return classes.moreDataButtonDarkActive;
    } else if (call === true && theme === "light") {
      return classes.moreDataButtonLightActive;
    } else if (call !== true && theme === "dark") {
      return classes.moreDataButtonDark;
    } else if (call !== true && theme === "light") {
      return classes.moreDataButtonLight;
    }
  };
  return (
    <ButtonGroupContainer>
      <ButtonGroup variant="outlined">
        <Button
          className={getCallButtonClass(theme.name, isCall)}
          onClick={handleIsCall}
        >
          Calls
        </Button>
        <Button
          className={getPutButtonClass(theme.name, isCall)}
          onClick={handleIsCall}
        >
          Puts
        </Button>
      </ButtonGroup>
    </ButtonGroupContainer>
  );
};

export default CallPutButtonGroup;
