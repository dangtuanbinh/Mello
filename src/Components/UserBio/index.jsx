import { Box } from "@material-ui/core";
import React from "react";
import UpdatingScreen from "../UpdatingScreen";
import "./index.css";

const UserBio = () => {
  return (
    <>
      <Box className="userBio">
        <UpdatingScreen />
      </Box>
    </>
  );
};

export default UserBio;
