import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/index";
import LogIn from "./Pages/LogIn";
import User from "./Pages/User";
import Shop from "./Pages/Shop";
import Video from "./Pages/Video";
import Forum from "./Pages/Forum";
import AccountSearch from "./Pages/AccountSearch/index"
import UserDetail from "./Pages/UserDetail/index"
import { useStateValue } from "./Context API/StateProvider";
import { useEffect } from "react";
import firebase from "firebase";
import { actionTypes } from "./Context API/reducer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Get user logged in
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch({
          type: actionTypes.SET_USER_WITH_GOOGLE,
          user: user,
        });
      } else {
        console.log("user not log in");
      }
    });
  }, []);
  return (
    <div className="app">
      {!user ? (
        <LogIn />
      ) : (
        <>
          <BrowserRouter>
            <Switch>
              <Route path="/userdetail/:userID" component={UserDetail}/>
              <Route path="/accountSearch" component={AccountSearch} />
              <Route path="/user" component={User} />
              <Route path="/shop" component={Shop} />
              <Route path="/video" component={Video} />
              <Route path="/forum" component={Forum} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
