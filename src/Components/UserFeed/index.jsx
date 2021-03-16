import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import ImageIcon from '@material-ui/icons/Image';

const UserFeed = () => {
  return (
    <>
      <Box className="userFeed">
        <Box className="userFeed__header">
          <Box className="userFeed__header__icon">
            <NotificationsActiveIcon />
            <MarkunreadMailboxIcon />
            <button className="userFeed__header__button"><ImageIcon />Post Photos</button>
          </Box>
        </Box>

        <Box className="userFeed__body">
          <h4>This is body</h4>
        </Box>
      </Box>
    </>
  );
};

export default UserFeed;
