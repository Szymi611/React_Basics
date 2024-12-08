import React from 'react';
import Todos from './components/Todos.tsx';
import Todo from './models/todo.ts';
import './App.css';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]

  
  return (
    <div className="App">
      <Todos items={todos}/>
    </div>
  );
}

export default App;