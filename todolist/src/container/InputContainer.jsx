import React from 'react';

function InputContainer({inputVal,writeTodo,addTodo}) {
  return (
    <div className="inputContainer">
      <div className="stack">
        <input type="text" value={inputVal} onChange={writeTodo} />
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  );
}

export default InputContainer;

