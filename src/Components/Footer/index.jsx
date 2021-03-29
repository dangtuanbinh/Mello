import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";

const Footer = () => {
  return (
    <>
      <Box className="footer">
        <Box className="footer__container">
          <NavLink
            className="footer__option"
            to="/"
            exact={true}
            activeClassName="activeOption"
          >
            <CalendarTodayOutlinedIcon />
          </NavLink>
          <NavLink
            className="footer__option"
            to="/forum"
            activeClassName="activeOption"
          >
            <ForumOutlinedIcon />
          </NavLink>
          <NavLink
            className="footer__option"
            to="/video"
            activeClassName="activeOption"
          >
            <VideoLibraryOutlinedIcon />
          </NavLink>
          <NavLink
            className="footer__option"
            to="/shop"
            activeClassName="activeOption"
          >
            <ShoppingCartOutlinedIcon />
          </NavLink>
          <NavLink
            className="footer__option"
            to="/userdetail"
            activeClassName="activeOption"
          >
            <ContactsOutlinedIcon />
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
