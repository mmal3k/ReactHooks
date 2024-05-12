import React, { useEffect, useState } from "react";
import "./index.css";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me to increment</button>
    </div>
  );
};

export default Effect;
