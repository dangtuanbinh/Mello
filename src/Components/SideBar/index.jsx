import { Box } from "@material-ui/core";
import React from "react";
import SideBarRow from "../SideBarRow/index";
import UserInfo from "../UserInfo/index";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { withRouter, NavLink } from "react-router-dom";

import "./index.css";

const SideBar = () => {
  return (
    <>
      <Box className="sideBar">
        <Box className="sideBar__userInfo">
          <UserInfo />
        </Box>
        <NavLink exact activeClassName="active" className="sideBar__link"  to="/">
          <SideBarRow
            Icon={LocalHospitalIcon}
            title="Feeds"
          />
        </NavLink>

        <NavLink className="sideBar__link" to="/forum">
          <SideBarRow Icon={EmojiFlagsIcon} title="Forum" />
        </NavLink>

        <NavLink className="sideBar__link" to="/user">
          <SideBarRow Icon={PeopleIcon} title="Friends" />
        </NavLink>

        <NavLink className="sideBar__link" to="">
          <SideBarRow Icon={ChatIcon} title="Messenger" />
        </NavLink>

        <NavLink className="sideBar__link" to="/shop">
          <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
        </NavLink>

        <NavLink className="sideBar__link" to="/video">
          <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
        </NavLink>
      </Box>
    </>
  );
};

export default withRouter(SideBar);
