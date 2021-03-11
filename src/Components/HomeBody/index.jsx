import React from "react";
import SideBar from "../SideBar/index";
import Feed from "../Feed/index";
import Widget from "../Widget/index";
import "./index.css";
import { Col, Row } from "react-bootstrap";
import { Box } from "@material-ui/core";

const HomeBody = () => {
return (
    <>
      <Box className="homeBody">
        <Box >
          <Row className="homeBody__container">
            <Col className="homeBody__sideBar">
              <SideBar />
            </Col>

            <Col xs="12" md="12" lg="6" className="homeBody__feed">
              <Feed />
            </Col>

            <Col className="homeBody__widget">
              <Widget />
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default HomeBody;
