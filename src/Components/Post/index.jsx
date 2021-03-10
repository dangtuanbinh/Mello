import { Avatar, Box } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comment from "../Comment/index";
import React, { useEffect, useState } from "react";

import "./index.css";
import db from "../../Firebase";

const Post = ({
  postID,
  user,
  profilePic,
  image,
  username,
  timestamp,
  message,
}) => {
  // Add comment
  const [comments, setComments] = useState([]);

  // Hide and show comment screen
  const [commentScreen, setCommentScreen] = useState(false);
  const showCommentScreen = () => {
    setCommentScreen(!commentScreen);
  };

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
      <Box className="post">
        <Box className="post__top">
          <Avatar src={profilePic} className="post__avatar" />

          <Box className="post__info">
            <h3>{username ? username : <p>New user</p>}</h3>
            <span className="post__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </Box>
        </Box>

        <Box className="post__bottom">
          <p>{message}</p>
        </Box>

        {image ? (
          <>
            <Box className="post__image">
              <img src={image} alt="" />
            </Box>
          </>
        ) : (
          <></>
        )}

        <Box className="post__optionGroup">
          <Box className="post__option">
            <ThumbUpIcon />
            <h6>0</h6>
            <p>Like</p>
          </Box>

          <Box className="post__option" onClick={showCommentScreen}>
            <ChatBubbleOutlineIcon />
            <h6>{comments.length}</h6>
            <p>Comment</p>
          </Box>

          <Box className="post__option">
            <NearMeIcon />
            <h6>0</h6>
            <p>Share</p>
          </Box>

          <Box className="post__option">
            <AccountCircleIcon />
            <ExpandMoreIcon />
          </Box>
        </Box>

        <Box className="post__comment">
          {commentScreen && <Comment postID={postID} user={user} />}
        </Box>
      </Box>
    </>
  );
};

export default Post;
