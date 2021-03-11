import { Box } from "@material-ui/core";
import React from "react";


import "./index.css";

const SideBarRow = ({Icon, title}) => {
  return (
    <>
      <Box className="sideBarRow">
          {Icon && <Icon className="sideBarRow__icon"/>}
          <h5>{title}</h5>
      </Box>
    </>
  );
};

export default SideBarRow;
