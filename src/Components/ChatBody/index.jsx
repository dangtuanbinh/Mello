import React from "react";
import ChatSideBar from "../ChatSidebar/index";
import Chat from "../ChatScreen/index";
import "./index.css";
import { Box } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Row } from "react-bootstrap";

const ChatBody = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Box className="chatBody">
            <Row className="chatBody__row">
              <ChatSideBar />
              <Route path="/room/:roomID">
                <Chat />
              </Route>
            </Row>
          </Box>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default ChatBody;
