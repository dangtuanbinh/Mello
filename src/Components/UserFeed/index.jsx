import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import ImageIcon from "@material-ui/icons/Image";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import UserPost from "../../Components/UserPost/index";
import { useStateValue } from "../../Context API/StateProvider";
import firebase from "firebase";

const UserFeed = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <Box className="userFeed">
        <Box className="userFeed__header">
          <Box className="userFeed__header__icon">
            <NotificationsActiveIcon />
            <MarkunreadMailboxIcon />
            <button className="userFeed__header__button">
              <ImageIcon />
              Post Photos
            </button>
          </Box>
        </Box>

        <TabContainer defaultActiveKey="first">
          <Box className="userFeed__body">
            <Box className="userFeed__body__top">
              <h2>Feed</h2>
              <Box className="userFeed__body__navigator">
                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      className="userFeed__navigator__link"
                      eventKey="first"
                    >
                      Photos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="userFeed__navigator__link"
                      eventKey="second"
                    >
                      Status
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Box>
            </Box>

            <Box className="userFeed__body__bottom">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <UserPost
                    profilePic={user.photoURL}
                    displayName={user.displayName}
                    likeCount="12"
                    commentCount="15"
                    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEQ8h23j8rVIwS2NlznjR9ZOhhk3L9OGzWg&usqp=CAU"
                    user={user}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">This is status</Tab.Pane>
              </Tab.Content>
            </Box>
          </Box>
        </TabContainer>
      </Box>
    </>
  );
};

export default UserFeed;
