import React, { useEffect, useState, useContext } from "react";
import {
  CommentsHeaderContainer,
  StyledCommentsDate,
  StyledCommentsUsername,
} from "../Styles/styledElements";
import { ThemeContext } from "styled-components";
import { useStyles } from "../Styles/muiStyles";
import { Card } from "@material-ui/core";
import Moment from "react-moment";

const CommentsCard = ({ comment }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const getCardColors =
    theme.name === "dark"
      ? {
          backgroundColor: "#38372b",
          borderColor: "#d4af37",
          color: "#ffebcd",
        }
      : {
          backgroundColor: "#f5f0f0",
          borderColor: "#00afc9",
          color: "#002933",
        };
  // console.log(Moment(comment.date_created).format('MMMM Do YYYY, h:mm:ss a'))
  return (
    <>
      <Card
        className={classes.card}
        style={getCardColors}
        variant="outlined"
        raised={true}
      >
        {" "}
        <CommentsHeaderContainer>
          <StyledCommentsUsername>
            {comment.user_nickname}
          </StyledCommentsUsername>
          <StyledCommentsDate>
            <Moment format='MMM DD, h:mma'>{comment.date_created}</Moment>
          </StyledCommentsDate>
        </CommentsHeaderContainer>
        <br></br>
        {comment.post}
      </Card>
    </>
  );
};

export default CommentsCard;
