import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.css";

const Module = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if (!show || !popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;

    // Execute positioning after ensuring the popup is rendered
  }, [show]);
  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          this is a popup
        </div>
      )}
    </div>
  );
};

export default Module;
