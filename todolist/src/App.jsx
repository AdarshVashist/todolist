import React, { useState } from 'react';
import './App.css';
import InputContainer from './container/InputContainer';
import Todolist from './container/Todolist';

function App() {
  const [inputval, setinputval] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setinputval(e.target.value);
  }

  function addTodo() {
    if (inputval !== '') {
      setTodos((previoustodo) => [...previoustodo, inputval]);
      setinputval('');
    }
  }
  function deleteTodo(index) {
    setTodos((previoustodo) => previoustodo.filter((previoustodo,previoustodoindex)=>
    {
      return previoustodoindex!==index;
    }));
  }

  return (
    <main>
      <h1>To Do List:-</h1>
      <InputContainer inputVal={inputval} writeTodo={writeTodo} addTodo={addTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo}/>
    </main>
  );
}

export default App;
