import { Avatar, Box, Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../../Context API/StateProvider";
import firebase from "firebase";
import { actionTypes } from "../../Context API/reducer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./index.css";

const UserInfo = () => {
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
      <Box className="userInfo">
        <Avatar src={user.photoURL} />
        <h4>{user.displayName ? user.displayName : user.email}</h4>
        <ExitToAppIcon onClick={logOut} className="userInfo__logOut"/>
      </Box>
    </>
  );
};

export default UserInfo;
