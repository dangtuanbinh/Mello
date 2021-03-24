import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UserListItem from "../UserListItem/index";
import firebase from "firebase";
import db from "../../Firebase";
import "./index.css";
import UpdatingScreen from "../UpdatingScreen";

const UserListScreen = () => {
  const [users, setUsers] = useState([]);

  // Get user list from Firebase database
  useEffect(() => {
    db.collection("user").onSnapshot((snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, user: doc.data() })));
    });
  }, []);

  console.log(users)
  return (
    <>
      <Box>
       
        {users?.map((id, user) => (
          <UserListItem
            key={user.id}
            userID={id}
            nickname={user.nickname}
            profilePic={user.profilePic}
            city={user.city}
          />
        ))}

        <UpdatingScreen />
      </Box>
    </>
  );
};

export default UserListScreen;
