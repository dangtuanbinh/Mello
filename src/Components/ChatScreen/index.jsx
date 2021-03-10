import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../../Firebase";
import Message from "../Message/index";
import ChatInput from "../ChatInput/index";
import "./index.css";
import { Col } from "react-bootstrap";

const Chat = () => {
  const { roomID } = useParams();
  const [roomDetail, setRoomDetail] = useState(null);
  const [roomMessage, setRoomMessage] = useState([]);

  useEffect(() => {
    if (roomID) {
      db.collection("room")
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomDetail(snapshot.data()));

      db.collection("room")
        .doc(roomID)
        .collection("message")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomID]);
  console.log(roomDetail);
  console.log(roomMessage);
  return (
    <>
      <Col xs="12" md="9" lg="9">
        <Box className="chat">

          <Box className="chat__header">
            <Box className="chat__headerLeft">
              <h4 className="chat__channelName">
                <strong># {roomDetail?.name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </Box>

            <Box className="chat__headerRight">
              <p>
                <InfoOutlinedIcon /> Detail
              </p>
            </Box>
          </Box>

          <Box className="chat__message">
            {roomMessage.map(({ message, timestamp, username, userimage }) => (
              <Message
                message={message}
                timestamp={timestamp}
                username={username}
                userimage={userimage}
              />
            ))}
          </Box>

          <Box>
            <ChatInput channelName={roomDetail?.name} channelID={roomID} />
          </Box>
        </Box>
      </Col>
    </>
  );
};

export default Chat;
