import { Box } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import db from "../../Firebase";

import "./index.css";

const CommentSender = ({ postID, user }) => {
  const [comment, setComment] = useState([]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postID).collection("comment").add({
      comMessage: comment,
      comUser: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment([]);
  };
  return (
    <>
      <Box className="commentSender">
        <form className="commentSender__form" type="submit">
          <input
            value={comment}
            type="text"
            placeholder="Your comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={postComment}
            type="submit"
            className="commentSender__button"
          >
            submit
          </button>
          <SendIcon
              className="commentSender__icon"
              onClick={postComment}
              type="submit"
            />
        </form>
      </Box>
    </>
  );
};

export default CommentSender;
