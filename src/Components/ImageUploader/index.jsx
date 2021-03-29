import { Box } from "@material-ui/core";
import React, { useState } from "react";
import db from "../../Firebase";
import { storage } from "../../Firebase";
import firebase from "firebase";
import { useStateValue } from "../../Context API/StateProvider";
import { withRouter } from "react-router-dom";
import "./index.css";

const ImageUploader = ({ toggle }) => {
  // Get user from Firebase
  const [{ user }, dispatch] = useStateValue();

  // Set up upload image to storage
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [downloadImage, setDownloadImage] = useState("");
  const [showTop, setShowTop] = useState(true);
  const [showBottom, setShowBottom] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const upload = (e) => {
    e.preventDefault();
    storage.ref(`images/${image.name}`).put(image);
    storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then((url) => {
        setDownloadImage(url);
      });
      setShowTop(!showTop)
      setShowBottom(!showBottom)
  };

  // Set toggle to close modal in parent component
  const setToggle = () => {
    if (downloadImage) {
      toggle(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: downloadImage,
    });
    setToggle();
  };

  return (
    <>
      <Box className="imageUploader">
        {showTop && (
          <>
            <Box className="imageUploader__top">
              <input
                type="file"
                onChange={handleChange}
                accept="image/*,video/*"
              />
              <button onClick={upload}>Next</button>
            </Box>
          </>
        )}

        {showBottom && (
          <>
            <Box className="imageUploader__bottom">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder={`What's your cat thinking?`}
                className="imageUploader__input"
              />

              <img className="imageUploader__img" src={downloadImage} alt="" />
              <button onClick={handleSubmit}>Post</button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default withRouter(ImageUploader);
