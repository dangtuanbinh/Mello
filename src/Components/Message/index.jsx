import { Box } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./index.css";

const Message = ({ message, timestamp, username, userimage }) => {
  return (
    <>
      <Box className="message">
        <Box className="message__info">
          <Box className="message__info__user">
            {userimage ? (
              <img src={userimage} alt="user" />
            ) : (
              <AccountCircleIcon />
            )}

            {username ? <h4>{username}</h4> : <h4>New user</h4>}
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
