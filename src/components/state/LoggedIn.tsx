import React, { useState } from "react";

const LoggedIn = () => {
  // type inference based on assigned initial value
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    // setIsLoggedIn(3)
  };

  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
      {/* <div>User is {isLoggedIn.length ? "logged in" : "logged out"}</div> */}
    </div>
  );
};

export default LoggedIn;
