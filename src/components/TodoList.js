import React, { useRef, useState } from "react";

function TodoList() {
  
  const [todo, setTodo] = useState([]);
  const ref = useRef();
  const addHandler = () => {
    const text = ref.current.value;
    const newTodo = { completed: false, text };
    setTodo([...todo, newTodo]);
    ref.current.value = "";
 
  };
 
  const liHandler = (index) => {
    const newItems = [...todo];
    newItems[index].completed = !newItems[index].completed;
    setTodo(newItems);
  };
  const handleDeleteItem = (index) => {
    const newItems = [...todo];
    newItems.splice(index,1)
    setTodo(newItems);
  }

  return (
    <div className="container">
      <h2>📝 To Do List</h2>
      <div className="containter-todo">
        <ul>
          {todo.map(({ text,completed }, index) => {
            return (
              <div className="item" key={index}>
              <li className={ completed ? 'done' : ''}  onClick={() => liHandler(index)}>
                {text}
              </li>
              <span  onClick={()=>handleDeleteItem(index)} className="trash">❌</span>
              </div>
            );
          })}
        </ul>
        <input className="input" placeholder="Add Tasks..." ref={ref} required/>
        <button  onClick={addHandler}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;
