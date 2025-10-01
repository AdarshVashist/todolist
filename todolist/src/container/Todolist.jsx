import React from "react";
import Todo from "./Todo";  // adjust to "../Todo" if file is outside container

function Todolist({ todos,deleteTodo }) {
  return (
    <div className="container">
      {todos.map((todo,index) => (
        <Todo  todo={todo} index ={index} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
}

export default Todolist;

