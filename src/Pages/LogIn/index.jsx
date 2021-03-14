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
  };
  return (
    <>
      <Box className="login">
        <Box className="login__header">
          <Box className="login__brand">
            <img src={brandImage} alt="Brand image" />
          </Box>

          <Box className="login__navigation">
            <NavLink to="/">Sign in</NavLink>

            <NavLink to="/">Sign up</NavLink>
          </Box>
        </Box>

        <Box className="login__content">
          <Box className="login__content__container">
            <form type="submit" className="login__form">
              <h3>Welcome! <br/> Login with your account</h3>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Youremail@abc.com"
              />
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />

              <Box>
                <button
                  type="submit"
                  onClick={signInWithUsername}
                  variant="contained"
                  className="login__button"
                >
                  Login
                </button>
              </Box>
            </form>

            {/* Sign up modal */}
            {/* <Modal show={show} onHide={handleClose}>
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
              </Modal> */}

            <p>Or</p>
            <button
              type="submit"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
          </Box>

          <p>
            Need account?{" "}
            <a href="#" onClick={handleShow}>
              Sign up here
            </a>
          </p>
        </Box>
      </Box>
    </>
  );
};

export default withRouter(LogIn);
