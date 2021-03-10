import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useStateValue } from "../../Context API/StateProvider";
import db from "../../Firebase";
import firebase from "firebase";
import "./index.css";

const ChatInput = ({ channelName, channelID }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelID) {
      db.collection('room').doc(channelID).collection('message').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        userimage: user.photoURL,
      });
    }
    setInput("")
  };
  return (
    <>
      <Box className="chatInput">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message # ${channelName}`}
          />
          <button type="submit" onClick={sendMessage}>
            SEND
          </button>
        </form>
      </Box>
    </>
  );
};

export default ChatInput;
