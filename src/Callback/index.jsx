import React, { useCallback, useMemo, useState } from "react";
import List from "./List";
import "./index.css";

const Callback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((inc) => {
    return [number+inc, number + 1+inc, number + 2+inc];
  }, [number]);

  // const getItems = useMemo(() => {
  //   return [number, number + 1, number + 2];
  // },[number]);

  const theme = {
    backgroundColor: dark ? "#444" : "#fff",
    color: dark ? "#fff" : "#444",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default Callback;
