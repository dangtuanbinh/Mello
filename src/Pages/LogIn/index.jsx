import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, provider } from "../../Firebase";
import { actionTypes } from "../../Context API/reducer";
import { useStateValue } from "../../Context API/StateProvider";
import { useHistory } from "react-router-dom";

import "./index.css";
import { Modal } from "react-bootstrap";

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
  };
  return (
    <>
      <Box className="login">
        <Box className="login__left">
          
          <div className="login__left__gif">
            <iframe
              className="login__left__iframe"
              src="https://giphy.com/embed/eNSUpqinyhIacptS86"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <h1>Mellow</h1>
          <p>Connecting your cat</p>
        </Box>

        <Box className="login__right">
          <Box className="login__right__top">
            <form type="submit">
              <h3>Log in with your account</h3>
              <p>Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abcxyz@gmail.com"
              />
              <p>Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Box className="login__button">
                <Button
                  type="submit"
                  onClick={signInWithUsername}
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Box>
            </form>
            <p>
              Don't have an account yet?{" "}
              <a href="#" onClick={handleShow}>
                Sign up here
              </a>
            </p>

            {/* Sign up modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign up!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form type="submit" className="login__signUp">
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
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button variant="contained" color="primary" onClick={signUp}>
                  Sign up
                </Button>
              </Modal.Footer>
            </Modal>
          </Box>

          <Box className="login__right__bottom">
            <p>Or</p>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={signInWithGoogle}
            >
              Login with google
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
