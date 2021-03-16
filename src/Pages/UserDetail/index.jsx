import React from "react";
import { Box } from "@material-ui/core";
import UserSideBar from "../../Components/UserSiderBar/index";
import "./index.css";

import { Row} from "react-bootstrap";

const UserDetail = () => {
  return (
    <>
      <Box className="userDetail">
        <Row className="userDetail__row">
         
            <UserSideBar />
          
        </Row>
      </Box>
    </>
  );
};

export default UserDetail;
