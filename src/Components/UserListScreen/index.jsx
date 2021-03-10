import { Box } from "@material-ui/core";
import React from "react";
import UserListItem from "../UserListItem/index"
import "./index.css"

const UserListScreen = () => {
  return (
    <>
      <Box>
          Thi is user list screen
          <UserListItem />
          <UserListItem />
      </Box>
    </>
  );
};

export default UserListScreen;
