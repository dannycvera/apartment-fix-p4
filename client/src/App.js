import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MainContainer from "./container/MainContainer";
import Layout from "./layout/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import UserEdit from "./screens/UserEdit";
import {
  loginUser,
  registerUser,
  userEdit,
  verifyUser,
  removeToken,
} from "./services/auth";

import "./App.css";

function App() {
  console.log("app.js");
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    try {
      const handleVerify = async () => {
        const userData = await verifyUser();
        setCurrentUser(userData);
        //history.push("/");
      };
      handleVerify();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const userEditSubmit = async (userEditData, id) => {
    const userData = await userEdit(userEditData, id);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("apartFixAuthToken");
    removeToken();
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path="/login">
          <Login loginSubmit={loginSubmit} />
        </Route>
        <Route path="/register">
          <Register registerSubmit={registerSubmit} />
        </Route>
        <Route path="/useredit">
          <UserEdit currentUser={currentUser} userEditSubmit={userEditSubmit} />
        </Route>
        <Route path="/all">
          <MainContainer currentUser={currentUser} all={true} />
        </Route>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
