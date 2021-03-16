import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import ImageIcon from "@material-ui/icons/Image";
import { Nav, Tab, TabContainer } from "react-bootstrap";

const UserFeed = () => {
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
                    <Nav.Link className="userFeed__navigator__link" eventKey="first">Photos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="userFeed__navigator__link" eventKey="second">Status</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Box>
            </Box>

            <Box className="userFeed__body__bottom">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  This is Image
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  This is status
                </Tab.Pane>
              </Tab.Content>
            </Box>
          </Box>
        </TabContainer>
      </Box>
    </>
  );
};

export default UserFeed;
