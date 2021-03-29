import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, provider } from "../../Firebase";
import { actionTypes } from "../../Context API/reducer";
import { useStateValue } from "../../Context API/StateProvider";
import { useHistory } from "react-router-dom";
import brandImage from "../../Assets/images/brand-removebg-preview.png";
import "./index.css";
import { Modal } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

const LogIn = () => {
  const [state, dispatch] = useStateValue();
  // Sign in with Google authentication
  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER_WITH_GOOGLE,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  // Signup modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Sign in with username and password
  const signInWithUsername = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((registeredUser) => {
        console.log(registeredUser);
      })
      .catch((error) => {
        alert("This account has not been registered");
      });
  };

  // Sign up with username and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((registeredUser) => {
        console.log(registeredUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    handleClose();
  };
  return (
    <>
      <Box className="login">
        <Box className="login__header">
          <Box className="login__brand">
            <img src={brandImage} alt="Brand image" />
          </Box>

          <Box className="login__navigation">
            <button
              activeClassName="active"
              className="login__navLink"
              to="/signup"
              onClick={handleShow}
            >
              Sign up
            </button>
          </Box>
        </Box>

        <Box className="login__content">
          <Box className="login__content__container">
            <Box className="login__form__container">
              <Box className="login__form__header">
                <h3>
                  Welcome! <br /> Login with your account
                </h3>
              </Box>
              <Box className="login__form">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Box>
                  <button
                    type="submit"
                    onClick={signInWithUsername}
                    className="login__button"
                  >
                    Login
                  </button>
                </Box>
              </Box>
            </Box>

            <Box className="login__content__footer">
              <p>Or</p>
              <button type="submit" onClick={signInWithGoogle}>
                Login with Google
              </button>
            </Box>
          </Box>

          <p>
            Need account?{" "}
            <a href="#" onClick={handleShow}>
              Sign up here
            </a>
          </p>
        </Box>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to Mellow</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Box className="login__signUp">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="login__modal__closeButton">
              Close
            </button>
            <button onClick={signUp} className="login__modal__signupButton">
              Sign Up
            </button>
          </Modal.Footer>
        </Modal>
      </Box>
    </>
  );
};

export default withRouter(LogIn);
