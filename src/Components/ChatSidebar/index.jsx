import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useStateValue } from "../../Context API/StateProvider";
import { Col } from "react-bootstrap";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "../SidebarOption/index";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../../Firebase";
import SearchIcon from "@material-ui/icons/Search";

import "./index.css";

const SideBar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("room").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  const [{ user }] = useStateValue();
  return (
    <>
      <Col xs="12" md="3" lg="3">
        <Box className="sidebar">
          <Box>
            <Box className="sidebar__search">
              <SearchIcon className="sidebar__searchIcon" />
              <input type="text" placeholder="Search Channel" />
            </Box>
            <SidebarOption
              Icon={AddIcon}
              addChannelOption
              title="Add more channels"
            />
          </Box>

          <hr />
          
          {channels.map((channel) => (
            <SidebarOption title={channel.name} id={channel.id} />
          ))}
        </Box>
      </Col>
    </>
  );
};

export default SideBar;
