import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import UserSideBar from "../../Components/UserSiderBar/index";
import "./index.css";
import Footer from "../../Components/Footer";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../Context API/StateProvider";


const UserDetail = () => {
  const {userID} = useParams();
  const [{ user }] = useStateValue();
  useEffect(() => {
    if(userID) {
      
    }
  },[userID])
  
  return (
    <>
      <Box className="userDetail">
        <Row className="userDetail__row">
          <UserSideBar />
          <Footer />
        </Row>
      </Box>
    </>
  );
};

export default UserDetail;
