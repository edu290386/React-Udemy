import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks";


export const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos([])

  return (
    <>
      <div className="m-3">
        TodoApp: {todosCount}, <small>Pending: {pendingTodosCount}</small>
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
