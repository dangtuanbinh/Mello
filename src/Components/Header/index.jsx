import { Avatar, Box, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import brandImage from "../../Assets/images/brand-removebg-preview.png";
import { useStateValue } from "../../Context API/StateProvider";
import { NavLink } from "react-router-dom";

import "./index.css";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  // Implement account search
  const [accountSearch, setAccountSearch] = useState();
  return (
    <>
      <Box className="header">
        <Navbar collapseOnSelect expand="lg">
          <Box className="header__left">
            <Navbar.Brand href="#home" className="header__brand">
              <img src={brandImage} alt="Brand Image"  className="header__brandImage"/>
              <h3>Mellow</h3>
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
                <div className="header__option header__option__active">
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
              <Box className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName ? user.displayName : user.email}</h4>
              </Box>
              <IconButton>
                <AddIcon />
              </IconButton>

              <IconButton>
                <ForumIcon />
              </IconButton>

              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>

              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </Box>
          </Navbar.Collapse>
        </Navbar>
      </Box>
    </>
  );
};

export default Header;
