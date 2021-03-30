import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import AlarmAddIcon from "@material-ui/icons/AlarmAdd";
import db from "../../Firebase";

const AddChannelButton = () => {
  const addChannel = () => {
    const channelName = prompt("please add your channel");
    if (channelName) {
      db.collection("room").add({
        name: channelName,
      });
    }
  };
  return (
    <>
      <Box className="addChannelButton">
        <button className="addChannelButton__button" onClick={addChannel}>
          <AlarmAddIcon />
          <span>Create room</span>
        </button>
      </Box>
    </>
  );
};

export default AddChannelButton;
