import React from "react";
import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";
import "./App.css";
import NewTodo from "./components/NewTodo.tsx";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
