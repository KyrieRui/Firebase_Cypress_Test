import React, { useState } from "react";
import "./logsign.css";

import user_icon from "../Assets/person.jpeg";
import passowrd_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

const LogSign = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={passowrd_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Can't remember password?<span>Click here</span>
        </div>
      )}

      <div className="submitt-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default LogSign;
