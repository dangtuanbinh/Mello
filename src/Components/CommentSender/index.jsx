import { Box } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import db from "../../Firebase";

import "./index.css";

const CommentSender = ({ postID, user, profilePic }) => {
  const [comment, setComment] = useState([]);

  const postComment = (e) => {
    e.preventDefault();
    if(comment !== "") {
      db.collection("posts").doc(postID).collection("comment").add({
        comMessage: comment,
        comUser: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        comProfilePic:user.photoURL,
      });
      setComment([])
    } else {
      alert("please enter your comment")
    }
    
  };
  return (
    <>
      <Box className="commentSender">
        <img src={profilePic} alt="User profile" />
        <form className="commentSender__form" type="submit">
          <input
            value={comment}
            type="text"
            placeholder="Your comment..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={postComment}
            className="commentSender__button"
          >
            submit
          </button>
          <SendIcon
            onClick={postComment}
          />
        </form>
      </Box>
    </>
  );
};

export default CommentSender;
