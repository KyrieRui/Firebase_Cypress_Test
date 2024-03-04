import React from "react";
import "./logsign.css";

import user_icon from "../Assets/person.jpeg";
import passowrd_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

const LogSign = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={passowrd_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Can't remember password?<span>Click here</span>
      </div>
      <div className="submitt-container">
        <div className="submit">Sign up</div>
        <div className="submit">Log in</div>
      </div>
    </div>
  );
};

export default LogSign;
