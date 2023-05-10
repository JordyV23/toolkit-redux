import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/todoApi";

export const TodoApp = () => {
  const [todoId, settodoId] = useState(1);

  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nexTodo = () => {
    settodoId(todoId + 1);
  };
  const previusTodo = () => {
    if (todoId === 1) return;
    settodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>IsLading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={previusTodo}>Previus Todo</button>
      <button onClick={nexTodo}>Next Todo</button>

      {/* 
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <strong> {todo.completed ? "DONE" : "Pending"} </strong>{" "}
            {todo.title}
          </li>
        ))}
      </ul>

      <button>Next Todo</button> */}
    </>
  );
};
