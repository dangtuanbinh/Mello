import { Box } from "@material-ui/core";
import React from "react";
import UpdatingScreen from "../UpdatingScreen";
import "./index.css";

const UserSetting = () => {
  return (
    <>
      <Box className="userSetting">
        <UpdatingScreen />
      </Box>
    </>
  );
};

export default UserSetting;
