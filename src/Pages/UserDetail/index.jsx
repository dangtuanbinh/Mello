import React from "react";
import { Box } from "@material-ui/core";
import wrapper from "../../HOCs/wrapper";
import UserSideBar from "../../Components/UserSiderBar/index";
import UserScreen from "../../Components/UserScreen/index";
import "./index.css";
import { Row } from "react-bootstrap";

const UserDetail = () => {
  return (
    <>
      <Box className="userDetail">
        <Row className="userDetail__row">
        <UserSideBar />
        <UserScreen />
        </Row>
        
      </Box>
    </>
  );
};

export default wrapper(UserDetail);
