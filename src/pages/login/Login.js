import React, { useContext } from "react";
import "./login.scss";
import { authContext } from "../../context/authContext";
const Login = () => {
  const { setUser } = useContext(authContext);
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="../../img/main-logo.png"
            alt="noteFilm-Logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton" onClick={setUser(true)}>
            Sign In
          </button>
          <span> New to Noteflix?</span>
          <b>Sign Up Now</b>
        </form>
      </div>
    </div>
  );
};

export default Login;
