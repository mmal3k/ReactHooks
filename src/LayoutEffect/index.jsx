import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.css";

const LayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{count}</div>
    </div>
  );
};

export default LayoutEffect;
