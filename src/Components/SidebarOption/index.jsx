import { Box } from "@material-ui/core";
import {useHistory} from "react-router-dom"
import React from "react";
import db from "../../Firebase";
import "./index.css";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();
  const selectChannel = () => {
    if(id) {
      history.push(`/room/${id}`)
    } else {
      history.push(title)
    }
  }

  return (
    <>
      <Box className="sidebarOption" onClick={selectChannel}>
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3 className="sidebarOption__channel">
            <span className="sidebarOption__hash">#</span> {title}
          </h3>
        )}
      </Box>
    </>
  );
};

export default SidebarOption;
