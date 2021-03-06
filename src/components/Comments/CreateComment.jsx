import React, {
  // useEffect,
  useState,
  useContext,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeContext } from "styled-components";
import {
  PostLengthContainer,
  CreateCommentContainer,
} from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import { Button, TextField } from "@material-ui/core";
import { AiOutlinePlus } from "react-icons/ai";
// import { FaSpinner } from "react-icons/fa";
import axios from "axios";

const CreateComment = ({
  optionDescription,
  symbol,
  mapType,
  handleQueryingNewComments,
}) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const { user } = useAuth0();
  const loggedInUser = user;
  const [post, setPost] = useState("");
  const [submittedPost, setSubmittedPost] = useState("");
  // const [showSpinner, setShowSpinner] = useState(false);

  const postLength = post.length;

  console.log("submited text", submittedPost);
  const comment = {
    symbol: symbol,
    date_created: new Date(),
    post: post,
    option_description: optionDescription,
    user_nickname: loggedInUser.nickname,
    user_name: loggedInUser.name,
    user_email: loggedInUser.email,
    user_id: loggedInUser.sub,
    call_put: mapType,
  };

  const handleTextChange = (e) => {
    setPost(e.target.value);
  };
  // const handleShowSpinner = (value) => {
  //   setShowSpinner(value);
  // };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (post === "" || postLength > 300) {
      //check null/length
    } else {
      setSubmittedPost(post);

      axios
        .post(`${process.env.REACT_APP_SERVER_ROUTE}/comments/create`, comment)
        // .then(handleShowSpinner(true))
        .then(setSubmittedPost(""))
        .then(setPost(""))

        .then(setTimeout(handleQueryingNewComments, 3000));
      // .then(setShowSpinner(false));
    }
  };
  // useEffect(() => handleShowSpinner(true), [showSpinner]);
  const themeColor = theme.name === "dark" ? "#d4af37" : "#146175";

  return (
    <CreateCommentContainer>
      {" "}
      <TextField
        onChange={handleTextChange}
        value={post}
        placeholder="Add a comment"
        error={postLength > 300}
        helperText={postLength > 300 ? "Comment is over 300 characters" : ""}
        multiline
        fullWidth
        InputProps={{
          style: {
            color: themeColor,
            fontStyle: post.length ? "normal" : "oblique",
          },
        }}
      />{" "}
      <Button
        style={{ color: themeColor }}
        className={
          theme.name === "dark"
            ? classes.moreDataButtonDark
            : classes.moreDataButtonLight
        }
        onClick={handleSubmitComment}
      >
        <AiOutlinePlus />
      </Button>
      <PostLengthContainer>{postLength} / 300</PostLengthContainer>
      <br></br>
    </CreateCommentContainer>
  );
};

export default CreateComment;
