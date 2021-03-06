import { Avatar, Box } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../Context API/StateProvider";
import firebase from "firebase";
import db from "../../Firebase";
import "./index.css";
import { Modal } from "react-bootstrap";
import ImageUploader from "../ImageUploader";
import useModal from "../../HOCs/useModal";
import PhotoIcon from "@material-ui/icons/Photo";
import SendIcon from "@material-ui/icons/Send";
import { NavLink } from "react-router-dom";

const MessageSender = () => {
  // Get user from Firebase
  const [{ user }, dispatch] = useStateValue();

  // Get status
  const [status, setStatus] = useState("");

  // Set up ImageUploader modal
  const { show, toggle } = useModal();

  const uploadStatus = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: status,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
    });

    setStatus("");
  };
  return (
    <>
      <Box className="messageSender">
        <Box className="messageSender__top">
          <Box className="messageSender__user">
            <NavLink to="/userdetail" className="messageSender__user__navLink">
              {user.photoURL ? (
                <img src={user.photoURL} alt="user photo" />
              ) : (
                <Avatar />
              )}
            </NavLink>
            <h4>{user.displayName ? user.displayName : <h4>New user</h4>}</h4>
          </Box>
          <form className="messageSender__form">
            <input
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              placeholder={`What's your cat thinking?`}
              className="messageSender__input"
            />

            <Box className="messageSender__uploader">
              <SendIcon onClick={uploadStatus}/>
              <Box className="messageSender__uploader__button" onClick={toggle}>
                <PhotoIcon />
              </Box>
            </Box>

            <button onClick={uploadStatus} type="submit">
              Hidden submit
            </button>
          </form>
        </Box>

        <Box className="messageSender__bottom">
          <Box className="messageSender__option">
            <VideocamIcon />
            <h3>Live video</h3>
          </Box>

          <Box className="messageSender__option">
            <PhotoLibraryIcon />
            <h3>Photo/Video</h3>
          </Box>

          <Box className="messageSender__option">
            <InsertEmoticonIcon />
            <h3>Feeling/Activity</h3>
          </Box>
        </Box>

        <Modal
          show={show}
          onHide={toggle}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          keyboard="true"
        >
          <Modal.Header closeButton>
            <h3>MELLOW</h3>
          </Modal.Header>
          <Modal.Body>
            {/* Pass toggle function to child component, to close it later */}
            <ImageUploader toggle={toggle} />
          </Modal.Body>
        </Modal>
      </Box>
    </>
  );
};

export default MessageSender;
