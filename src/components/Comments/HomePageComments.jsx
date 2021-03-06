import React, { useEffect, useState } from "react";
import {
  CommentsContainer,
  HomePageDiscussionHeaderContainer,
  HomePageCommentsContainer,
} from "../Styles/styledElements";
import CreateComment from "./CreateComment";
import axios from "axios";
import CommentsCard from "./CommentsCard";

const HomePageComments = ({ displayWatchlist }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [isNewComment, setIsNewComment] = useState(false);

  const handleNewComment = () => {
    setIsNewComment(!isNewComment);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ROUTE}/comments/all`)
      .then((response) => {
        setCommentsData([response.data.rows]);
      });
  }, [isNewComment]);

  return (
    <HomePageCommentsContainer displayWatchlist={displayWatchlist}>
      <HomePageDiscussionHeaderContainer>
        Today's Discussion Thread
      </HomePageDiscussionHeaderContainer>
      <CreateComment
        optionDescription={"General"}
        symbol={"General"}
        mapType={"General"}
        isHomePage={true}
        handleQueryingNewComments={handleNewComment}
      />
      <CommentsContainer isHomePage={true}>
        {!!commentsData.length
          ? commentsData[0].length === 0
            ? "No comments have been added today"
            : commentsData.map((data) =>
                data.map((comment) => <CommentsCard comment={comment} />)
              )
          : ""}
      </CommentsContainer>
    </HomePageCommentsContainer>
  );
};

export default HomePageComments;
