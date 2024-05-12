import React, { createContext } from "react";
import "./index.css";

const UserContext = createContext();



const Context = () => {
  const user = { name: "Karim", age: 20 };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;

