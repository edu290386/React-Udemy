import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState({});

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.input == undefined || inputValue.input === "") return;
    // setCategories((categories) => [...categories, inputValue.input]);
    onAddCategory(inputValue.input.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        type="text"
        name="input"
        value={inputValue.input || ""}
        id=""
        placeholder="Buscar gifs"
      />
      <button onClick={onSubmit}>Agregar</button>
    </form>
  );
};
