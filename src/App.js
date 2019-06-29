import React from "react";
import AddToDo from "./components/addToDo";
import List from "./components/list";


export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddToDo/>
      <List/>
    </div>
  );
}
