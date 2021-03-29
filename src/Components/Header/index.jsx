import { Avatar, Box, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import brandImage from "../../Assets/images/brand-removebg-preview.png";
import { useStateValue } from "../../Context API/StateProvider";
import { NavLink } from "react-router-dom";
import firebase from "firebase";
import { actionTypes } from "../../Context API/reducer";

import "./index.css";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  //   Log out
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_USER_WITH_GOOGLE,
          user: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Implement account search
  const [accountSearch, setAccountSearch] = useState();
  return (
    <>
      <Box className="header">
        <Navbar collapseOnSelect expand="lg">
          <Box className="header__left">
            <Navbar.Brand>
              <NavLink to="/" className="header__brand">
                <img
                  src={brandImage}
                  alt="Brand Image"
                  className="header__brandImage"
                />
                <h3>Mellow</h3>
              </NavLink>
            </Navbar.Brand>
            <Box className="header__search">
              <NavLink to="/accountSearch" className="header__searchIcon">
                <SearchIcon />
              </NavLink>

              <input
                type="text"
                placeholder="Search..."
                value={accountSearch}
                onChange={(e) => setAccountSearch(e.target.value)}
              />
            </Box>
          </Box>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <div className="header__center">
                <div className="header__option">
                  <NavLink className="header__option__link" to="/">
                    <HomeIcon />
                  </NavLink>
                </div>

                <div className="header__option">
                  <NavLink className="header__option__link" to="/forum">
                    <FlagIcon />
                  </NavLink>
                </div>

                <div className="header__option">
                  <NavLink className="header__option__link" to="/video">
                    <SubscriptionsIcon />
                  </NavLink>
                </div>

                <div className="header__option">
                  <NavLink className="header__option__link" to="/shop">
                    <LocalGroceryStoreIcon />
                  </NavLink>
                </div>
                <div className="header__option">
                  <NavLink className="header__option__link" to="/user">
                    <AccountBoxIcon />
                  </NavLink>
                </div>
              </div>
            </Nav>

            <Box className="header__right">
              <NavLink to="/userdetail" className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName ? user.displayName : user.email}</h4>
              </NavLink>
              <IconButton>
                <ExitToAppIcon onClick={logOut}/>
              </IconButton>

              <IconButton>
                <ForumIcon />
              </IconButton>

              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>
            </Box>
          </Navbar.Collapse>
        </Navbar>
      </Box>
    </>
  );
};

export default Header;
