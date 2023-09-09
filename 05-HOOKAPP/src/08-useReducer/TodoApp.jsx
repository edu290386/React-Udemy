import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = { type: "[TODO] Add Todo", payload: todo };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = { type: "[TODO] Remove Todo", payload: id };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = { type: "[TODO] Toggle Todo", payload: id };
    dispatch(action);
  };
console.log(todos);
  return (
    <>
      <div className="m-3">
        TodoApp: 10, <small>Pending: 2</small>
      </div>
      <hr className="m-3" />
      <div className="row m-2">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
