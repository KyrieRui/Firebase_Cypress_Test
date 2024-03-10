import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthDetail = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // 在组件卸载时清除监听器
    return () => unsubscribe();
  }, []);

  return <div>{authUser ? <p>Signed In</p> : <p>Signed Out</p>}</div>;
};

export default AuthDetail;
