import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = () => {
    if (counter <= 3) return;
    setCounter(counter - 3);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset };
};
