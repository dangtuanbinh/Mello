import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { actionTypes } from "../../Context API/reducer";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import { useStateValue } from "../../Context API/StateProvider";
import firebase from "firebase";
import brandImage from "../../Assets/images/brand-removebg-preview.png";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import CommentIcon from "@material-ui/icons/Comment";
import SettingsIcon from "@material-ui/icons/Settings";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import ContactsIcon from "@material-ui/icons/Contacts";
import UserFeed from "../../Components/UserFeed/index";
import UserMessage from "../../Components/UserMessage/index";
import UserBio from "../../Components/UserBio/index";
import UserSetting from "../../Components/UserSetting/index";

const UserSideBar = () => {
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

  return (
    <>
      <TabContainer defaultActiveKey="first">
        <Box className="userSideBar">
          <Box className="userSideBar__left">
            <Box className="userSideBar__info">
              <NavLink to="/" className="userSideBar__brand">
                <img
                  src={brandImage}
                  alt="Brand image"
                  className="userSideBar__brandImage"
                />
                <h3>Mellow</h3>
              </NavLink>

              <Box className="userSideBar__info__top">
                <img
                  src="https://timesofindia.indiatimes.com/photo/67586673.cms"
                  alt="User profile"
                />
                <Box className="userSideBar__info__name">
                  <h3>Dau</h3>
                  <span>@daudien</span>
                </Box>
              </Box>

              <Box className="userSideBar__info__bottom">
                <Box className="userSideBar__info__statistic">
                  <h3>46</h3>
                  <span>Posts</span>
                </Box>

                <Box className="userSideBar__info__statistic">
                  <h3>2.3k</h3>
                  <span>Follower</span>
                </Box>

                <Box className="userSideBar__info__statistic">
                  <h3>526</h3>
                  <span>Following</span>
                </Box>
              </Box>
            </Box>

            <Box className="userSideBar__navigator">
              <Box className="userSideBar__navigator__body">
                <Nav
                  transition={true}
                  className="userSideBar__navigator__container"
                >
                  <Nav.Item>
                    <Nav.Link
                      className="userSideBar__navigator__link"
                      eventKey="first"
                    >
                      <DynamicFeedIcon />
                      <h5>Feed</h5>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      className="userSideBar__navigator__link"
                      eventKey="second"
                    >
                      <CommentIcon />
                      <h5>Messenger</h5>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      className="userSideBar__navigator__link"
                      eventKey="third"
                    >
                      <ContactsIcon />
                      <h5>Information</h5>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      className="userSideBar__navigator__link"
                      eventKey="fourth"
                    >
                      <SettingsIcon />
                      <h5>Settings</h5>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Box>

              <Box className="userSideBar__navigator__footer" onClick={logOut}>
                <Box className="userSideBar__navigator__link">
                  <MeetingRoomIcon />
                  <h5>Sign out</h5>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="userSideBar__right">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <UserFeed />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <UserMessage />
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <UserBio />
              </Tab.Pane>

              <Tab.Pane eventKey="fourth">
                <UserSetting />
              </Tab.Pane>
            </Tab.Content>
          </Box>
        </Box>
      </TabContainer>
    </>
  );
};

export default UserSideBar;
