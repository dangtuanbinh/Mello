import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../Firebase";
import "./index.css";

const CommentScreen = ({ postID, user, profilePic }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let unsubcribe;
    if (postID) {
      unsubcribe = db
        .collection("posts")
        .doc(postID)
        .collection("comment")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubcribe();
    };
  }, [postID]);
  return (
    <>
      <Box className="commentScreen">
        {comments.map((comment) => (
          <>
            <Box className="commentScreen__container">
              <Box className="commentScreen__body">
                <img src={comment.comProfilePic} alt="User photo" />
                <Box className="commentScreen__body__content">
                  <h5>{comment.comUser}</h5>
                  <span>{comment.comMessage}</span>
                </Box>
              </Box>
              <Box className="commentScreen__footer">
                <p>4 hours</p>
                <p>Like</p>
                <p>Reply</p>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default CommentScreen;
