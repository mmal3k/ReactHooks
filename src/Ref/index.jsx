import React, { useEffect, useRef, useState } from "react";

const Reference = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Some value";
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>my Name is {name}</div>
      <div>Irendered {renderCount.current}</div>
      <button onClick={handleFocus}>focus</button>
    </div>
  );
};

export default Reference;
