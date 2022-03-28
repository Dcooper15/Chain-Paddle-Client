import React, { useEffect, useState } from "react";
import {
  CommentsContainer,
  StyledDiscussionHeader,
} from "../Styles/styledElements";
import CreateComment from "./CreateComment";
import axios from "axios";
import CommentsCard from "./CommentsCard";
import Name from "../DataPoints/Name";

const OptionComments = ({
  symbol,
  fullChainDescription,
  callDescription,
  mapType,
  putDescription,
}) => {
  const optionCommentsToQuery =
    mapType === "full"
      ? fullChainDescription
      : mapType === "call"
      ? callDescription
      : putDescription;

  const [commentsData, setCommentsData] = useState([]);
  const [isNewComment, setIsNewComment] = useState(false);

  const handleNewComment = () => {
    setIsNewComment(!isNewComment);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_ROUTE}/comments/option/${optionCommentsToQuery}`
      )
      .then((response) => {
        setCommentsData([response.data.rows]);
      });
  }, [optionCommentsToQuery, isNewComment]);

  return (
    <>
      <StyledDiscussionHeader>
        Discussion - <Name namesRender={optionCommentsToQuery} />
      </StyledDiscussionHeader>
      <CreateComment
        optionDescription={optionCommentsToQuery}
        symbol={symbol}
        mapType={mapType}
        handleQueryingNewComments={handleNewComment}
      />
      <CommentsContainer>
        {!!commentsData.length
          ? commentsData[0].length === 0
            ? "No comments have been added for this option"
            : commentsData.map((data) =>
                data.map((comment) => <CommentsCard comment={comment} />)
              )
          : ""}
      </CommentsContainer>
    </>
  );
};

export default OptionComments;
