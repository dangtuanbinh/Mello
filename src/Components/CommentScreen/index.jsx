import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../Firebase";
import "./index.css";

const CommentScreen = ({ postID, user }) => {
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
            <Box className="commentScreen__comment">
              <h5>{comment.comUser} :</h5>
              <span className="commentScreen__content">
                {comment.comMessage}
              </span>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default CommentScreen;
