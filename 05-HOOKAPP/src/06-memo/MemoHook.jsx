import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("test");
  }
  return `iterationNumber: ${iterationNumber}`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setshow] = useState(true);
    const memorizedValue = useMemo(()=>heavyStuff(counter),[counter]);

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button onClick={() => increment()} className="btn btn-danger">
        +1
      </button>
      <button
        onClick={() => setshow(!show)}
        className="btn btn-outline-success"
      >
        Show / Hide { JSON.stringify(show) }
      </button>
    </div>
  );
};
