import { Avatar, Box } from "@material-ui/core";
import React from "react";
import "./index.css";

const Story = ({image, profile, title}) => {
  return (
    <>
      <Box style={{backgroundImage: `url(${image})`}} className="story">
        <Avatar src={profile} className="story__avatar"/>
        <h4>{title}</h4>
      </Box>
    </>
  );
};

export default Story;
