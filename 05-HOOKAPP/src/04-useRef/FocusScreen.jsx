import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  
  const onFocusInput = () => {
    inputRef.current.select();
    // inputRef.current.focus();
  }

  return (
    <div className="m-4">
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />
      <button onClick={onFocusInput} className="btn btn-primary mt-3">Set Focus</button>
    </div>
  );
};
