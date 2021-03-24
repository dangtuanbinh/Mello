import { Avatar, Box } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comment from "../Comment/index";
import React, { useEffect, useState } from "react";
import CommentSender from "../CommentSender/index";
import "./index.css";
import db from "../../Firebase";
import firebase from "firebase";

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

  // Create like button to change color and like counts
  const [likeButton, setLikeButton] = useState(true);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    if (postID) {
      db.collection("posts")
        .doc(postID)
        .collection("comment")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });

      db.collection("posts")
        .doc(postID)
        .collection("likeCount")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setLikes(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    }
  }, [postID]);

  // Post like count to Firebase
  const uploadLike = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postID).collection("likeCount").add({
      likedUser: user.displayName,
      profilePic: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setLikeButton(!likeButton);
  };

  return (
    <>
      <Box
        className="post"
        style={image ? { height: "900px" } : { height: "350px" }}
      >
        <Box className="post__top">
          <img src={profilePic} className="post__avatar" />

          <Box className="post__info">
            <h3>{username ? username : <h3>New user</h3>}</h3>
            <h5 className="post__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </h5>
          </Box>
        </Box>

        <Box className="post__bottom">
          <p>{message}</p>
        </Box>

        {image ? (
          <>
            <Box
              className="post__image"
              style={{ backgroundImage: `url(${image})` }}
            ></Box>
          </>
        ) : (
          <></>
        )}

        <Box className="post__statistic">
          <p>{likes.length} likes</p>
          <Box className="post__statistic__right">
            <p onClick={showCommentScreen}>{comments.length} comments</p>
            <p>0 shares</p>
          </Box>
        </Box>

        <Box className="post__optionGroup">
          <Box
            className={likeButton ? "post__option" : "post__option--like"}
            onClick={uploadLike}
          >
            <ThumbUpIcon />
            <h5>Like</h5>
          </Box>

          <Box className="post__option" onClick={showCommentScreen}>
            <ChatBubbleOutlineIcon />
            <h5>Comment</h5>
          </Box>

          <Box className="post__option">
            <NearMeIcon />
            <h5>Share</h5>
          </Box>

          <Box className="post__option">
            <AccountCircleIcon />
            <ExpandMoreIcon />
          </Box>
        </Box>

        <Box className="post__comment">
          {commentScreen && <Comment postID={postID} user={user} />}
        </Box>

        <Box className="post__input">
          <CommentSender profilePic={profilePic} postID={postID} user={user} />
        </Box>
      </Box>
    </>
  );
};

export default Post;
