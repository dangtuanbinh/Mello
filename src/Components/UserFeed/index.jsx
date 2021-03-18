import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import ImageIcon from "@material-ui/icons/Image";
import { Nav, Row, Tab, TabContainer } from "react-bootstrap";
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
                  <Row>
                    <UserPost
                      profilePic={user.photoURL}
                      displayName={user.displayName}
                      likeCount="12"
                      commentCount="15"
                      postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEQ8h23j8rVIwS2NlznjR9ZOhhk3L9OGzWg&usqp=CAU"
                      user={user}
                    />

                    <UserPost
                      profilePic={user.photoURL}
                      displayName={user.displayName}
                      likeCount="12"
                      commentCount="15"
                      postImage="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      user={user}
                    />

                    <UserPost
                      profilePic={user.photoURL}
                      displayName={user.displayName}
                      likeCount="12"
                      commentCount="15"
                      postImage="https://images.unsplash.com/photo-1507150823660-eed1895c23c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      user={user}
                    />

                    <UserPost
                      profilePic={user.photoURL}
                      displayName={user.displayName}
                      likeCount="12"
                      commentCount="15"
                      postImage="https://images.unsplash.com/photo-1523221197642-4a2e4b6a3dcf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      user={user}
                    />

                    <UserPost
                      profilePic={user.photoURL}
                      displayName={user.displayName}
                      likeCount="12"
                      commentCount="15"
                      postImage="https://images.unsplash.com/photo-1557948206-7478d769f813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                      user={user}
                    />

                    <UserPost
                      profilePic={user.photoURL}
                      displayName={user.displayName}
                      likeCount="12"
                      commentCount="15"
                      postImage="https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=594&q=80"
                      user={user}
                    />
                  </Row>
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
