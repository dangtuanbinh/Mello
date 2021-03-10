import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";

const Message = ({ message, timestamp, username, userimage }) => {
  return (
    <>
      <Box className="message">
        <Box className="message__info">
          <Box className="message__info__user">
            <img src={userimage} alt="user" />
            <h4>{username}</h4>
          </Box>

          <Box className="message__content">
            <h6>{message}</h6>
          </Box>
        </Box>

        <span className="message__timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
        </span>
      </Box>
    </>
  );
};

export default Message;
