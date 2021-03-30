import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Col, Navbar } from "react-bootstrap";
import SidebarOption from "../SidebarOption/index";
import db from "../../Firebase";
import SearchIcon from "@material-ui/icons/Search";
import "./index.css";
import AddChannelButton from "../AddChannelButton";

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
  return (
    <>
      <Col xs="12" md="12" lg="3" className="sidebar__col">
        <Box className="sidebar">
          <Box className="sidebar__top">
            <AddChannelButton />
          </Box>

          <Box className="sidebar__bottom">
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand className="sidebar__bottom__navBrand">
                <span>Channel</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Box className="sidebar__search">
                  <SearchIcon className="sidebar__searchIcon" />
                  <input type="text" placeholder="Search..." />
                </Box>
                {channels.map((channel) => (
                  <SidebarOption title={channel.name} id={channel.id} />
                ))}
              </Navbar.Collapse>
            </Navbar>
          </Box>
        </Box>
      </Col>
    </>
  );
};

export default SideBar;
