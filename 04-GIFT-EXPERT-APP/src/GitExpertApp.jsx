import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([
    "Dragon Ball",
    "Caballeros del Zodiaco",
  ]);

  const onAddCategory = () => {
    setCategories([...categories, "Thundercats"]);
  };

  console.log(categories);
  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
};
