import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonGroupContainer } from "../Styles/styledElements";
import { ButtonGroup, Button } from "@material-ui/core";
import { useStyles } from "../Styles/muiStyles";
const DiscussionWatchlistButtons = ({
  displayWatchlist,
  handleDiscussionWatchlistChange,
}) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();

  const getDiscussionButtonClass = (theme, isWatchlist) => {
    if (isWatchlist === false && theme === "dark") {
      return classes.moreDataButtonDarkActive;
    } else if (isWatchlist === false && theme === "light") {
      return classes.moreDataButtonLightActive;
    } else if (isWatchlist !== false && theme === "dark") {
      return classes.moreDataButtonDark;
    } else if (isWatchlist !== false && theme === "light") {
      return classes.moreDataButtonLight;
    }
  };
  const getWatchlistButtonClass = (theme, isWatchlist) => {
    if (isWatchlist === true && theme === "dark") {
      return classes.moreDataButtonDarkActive;
    } else if (isWatchlist === true && theme === "light") {
      return classes.moreDataButtonLightActive;
    } else if (isWatchlist !== true && theme === "dark") {
      return classes.moreDataButtonDark;
    } else if (isWatchlist !== true && theme === "light") {
      return classes.moreDataButtonLight;
    }
  };
  return (
    <ButtonGroupContainer>
      <ButtonGroup variant="outlined">
        <Button
          className={getDiscussionButtonClass(theme.name, displayWatchlist)}
          onClick={handleDiscussionWatchlistChange}
        >
          Discussion
        </Button>
        <Button
          className={getWatchlistButtonClass(theme.name, displayWatchlist)}
          onClick={handleDiscussionWatchlistChange}
        >
          Watchlists
        </Button>
      </ButtonGroup>
    </ButtonGroupContainer>
  );
};

export default DiscussionWatchlistButtons;
