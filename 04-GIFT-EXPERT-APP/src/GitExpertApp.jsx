import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([
    "Caballeros del Zodiaco",
  ]);

  const onAddCategory = (newCategory) => {
    const duplicatedCategory = categories.some(
      (category) => category.toLowerCase() == newCategory.toLowerCase()
    );
    if (duplicatedCategory) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory onAddCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
