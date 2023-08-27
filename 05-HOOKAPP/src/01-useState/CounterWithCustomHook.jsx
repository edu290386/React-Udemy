import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>Counter hook {counter}</h1>
      <hr />
      <button onClick={() => decrement()} className="btn btn-primary">
        -1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => increment(10)} className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
