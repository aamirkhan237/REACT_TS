import React, { useState } from "react";

type Auther = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<null | Auther>(null);

  const handleLogin = () => {
    setUser({
      name: "Aamirkhan",
      email: "emailofuser",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <div>User</div>
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User Name is: {user?.name}</p>
      <p>User Email is: {user?.email}</p>
    </>  
    
  );
};

export default User;
