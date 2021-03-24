import { Box } from "@material-ui/core";
import React from "react";
import UpdatingScreen from "../UpdatingScreen";
import "./index.css";

const UserMessage = () => {
  return (
    <>
      <Box className="userMessage">
        <UpdatingScreen />
      </Box>
    </>
  );
};

export default UserMessage;
