import { Box } from "@material-ui/core";
import React from "react";
import "./index.css"

const UserPost = ({profilePic, displayName, likeCount, commentCount,postImage,user}) => {
  return (
    <>
      <Box className="userPost">
        <img src={postImage} alt="post imgae" />
        <Box className="userPost__info">
          <img src={profilePic} alt="user profile" />

          <Box className="userPost__info__text">
            <Box>

            </Box>

            <Box>
              
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserPost;
