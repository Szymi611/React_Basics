import React from "react";
import Todos from "./components/Todos.tsx";
import "./App.css";
import NewTodo from "./components/NewTodo.tsx";
import TodosContextProvider from "./store/todos-context.tsx";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
