import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  //   const handleLogin = () => {
  //     if (userContext) {
  //       userContext.setUser({
  //         name: "Reddy",
  //         email: "reddy@email.com",
  //       });
  //     }

  // const handleLogout = () => {
  //     if(userContext){
  //         userContext.setUser(null);
  //     }
  // };

  // type assertion allows to remove if-checking everytime
  const handleLogin = () => {
    userContext.setUser({
      name: "Reddy",
      email: "reddy@email.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
};

export default User;
