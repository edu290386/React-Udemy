import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState({});

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setInputValue({...inputValue, [name]:value });
  };
  console.log(inputValue);

  return (
    <>
      <input
        onChange={onInputChange}
        type="text"
        name="input"
        value={inputValue.input}
        id=""
        placeholder="Buscar gifs"
      />
    </>
  );
};
