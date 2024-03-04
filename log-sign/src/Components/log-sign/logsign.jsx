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
          <img
            src={user_icon}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <img
            src={email_icon}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <input type="email" placeholder="Name" />
        </div>

        <div className="input">
          <img
            src={passowrd_icon}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <input type="password" placeholder="Name" />
        </div>
      </div>
    </div>
  );
};

export default LogSign;
