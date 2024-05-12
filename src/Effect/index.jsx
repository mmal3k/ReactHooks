import React, { useEffect, useState } from "react";
import "./index.css";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect triggered!");
  }, []);

  return (
    <div>
      <h2>Effect Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Effect;
