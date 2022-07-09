import React, { useState } from "react";

const Loggedin = () => {
  const [isLogin, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> user is {isLogin ? "loggin" : "not login"}</div>
    </div>
  );
};

export default Loggedin;
