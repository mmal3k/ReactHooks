import React, { useState } from "react";
import "./index.css";

const State = () => {
  // Define a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      {/* Button to increment the count */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
};

export default State;