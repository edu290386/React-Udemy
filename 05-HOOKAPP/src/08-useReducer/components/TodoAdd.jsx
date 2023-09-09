// import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  // const { formState, onInputChange, onResetForm } = useForm({})
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });
  
  // const { description } = formState

  const handleForm = (e) => {
    e.preventDefault();
    if (description === undefined || description === "") return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  // const [inputTask, setInputTask] = useState({});

  // const handleInput = (event) => {
  //   const { value, name } = event.target;
  //   setInputTask({ ...inputTask, [name]: value });
  // };

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   if (inputTask.input === "" || inputTask.input === undefined) return;
  //   onNewTodo({
  //     id: new Date().getTime(),
  //     description: inputTask.input,
  //     done: false,
  //   });
  //   setInputTask("");
  // };

  return (
    <>
      <form action="" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="New task"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button
          onClick={handleForm}
          type="submit"
          className="btn btn-primary mt-1"
        >
          Submit
        </button>
      </form>
    </>
  );
};
