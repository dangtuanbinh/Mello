import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Col } from "react-bootstrap";

const UserPost = ({
  profilePic,
  displayName,
  likeCount,
  commentCount,
  postImage,
  user,
}) => {
  return (
    <>
      <Col xs="12" md="4" lg="4">
        <Box className="userPost">
          <Box className="userPost__image" style={{backgroundImage: `url(${postImage})`}}>
            
          </Box>

          <Box className="userPost__info">
            <Box className="userPost__info__text">
              <img
                src={profilePic}
                alt="user profile"
              />
              <h6>{displayName}</h6>
            </Box>

            <Box className="userPost__info__icon">
              <Box className="userPost__info__icon--statistic">
                <FavoriteBorderIcon />
                <span>{likeCount}</span>
              </Box>

              <Box className="userPost__info__icon--statistic">
                <ChatBubbleOutlineIcon />
                <span>{commentCount}</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Col>
    </>
  );
};

export default UserPost;
