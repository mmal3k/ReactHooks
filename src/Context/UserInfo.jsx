import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserInfo;
