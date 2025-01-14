import React from "react";
import { useRef } from "react";

import { useContext } from "react";
import { TodosContext } from "../store/todos-context.tsx";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0){
      //thorw an error
      console.error("Invalid input. Input should not be empty.");
      return;
    }

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
