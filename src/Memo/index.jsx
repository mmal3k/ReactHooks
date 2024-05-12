import React, { useMemo, useState } from "react";
import "./index.css";

function ExpensiveCalculation({ num }) {
  const computeExpensiveValue = (num) => {
    console.log("Computing expensive value...");
    // Simulating an expensive computation
    return num * 2;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(num), [num]);

  return (
    <div>
      <p>Input number: {num}</p>
      <p>Expensive value: {memoizedValue}</p>
    </div>
  );
}

const Memo = () => {
  const [input, setInput] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <ExpensiveCalculation num={input} />
    </div>
  );
};

export default Memo;
