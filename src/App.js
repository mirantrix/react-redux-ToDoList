import React from "react";
import AddToDo from "./components/addToDo";


export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddToDo />
    </div>
  );
}
