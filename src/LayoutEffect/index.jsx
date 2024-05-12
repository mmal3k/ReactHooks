import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.css";

const LayoutEffect = () => {
  const [useEffectWidth, setUseEffectWidth] = useState(0);
  const [useLayoutEffectWidth, setUseLayoutEffectWidth] = useState(0);

  // useEffect runs asynchronously after the browser has painted
  useEffect(() => {
    // Simulate a delay to mimic an asynchronous operation
    const timeout = setTimeout(() => {
      // Measure the width of the element
      const elementWidth = document.getElementById("container").clientWidth;
      setUseEffectWidth(elementWidth);
    }, 2000); // 2 seconds delay

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []); // empty dependency array means it only runs once after initial render

  // useLayoutEffect runs synchronously after all DOM mutations
  useLayoutEffect(() => {
    // Measure the width of the element
    const elementWidth = document.getElementById("container").clientWidth;
    setUseLayoutEffectWidth(elementWidth);
  }, []); // empty dependency array means it only runs once after initial render

  return (
    <div>
      <div id="container" style={{ width: "50%", border: "1px solid black" }}>
        This is a container
      </div>
      <p>
        Width measured with useEffect: {useEffectWidth}px (updated after
        painting)
      </p>
      <p>
        Width measured with useLayoutEffect: {useLayoutEffectWidth}px (updated
        before painting)
      </p>
    </div>
  );
};

export default LayoutEffect;
