import { useState } from "react";

function Input() {

  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const ChangeInput = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue === "") 
      return;
    setToDoList([...toDoList, inputValue]);
    setInputValue("");
  };


  const deleteItem = (index) => {
    toDoList.splice(index, 1);
    setToDoList([...toDoList]);
  };
  const deleteAllItem = () => {
    setToDoList([]);
  }

  return (
    <>
      <input type="text" onChange={ChangeInput} value={inputValue} placeholder="Enter something" />
      <button onClick={addItem}>Add</button>
      {toDoList.length === 0 ? (<p>No elements in todo list</p>):(
        <ul>
          {toDoList.map((item, index) => (
            <li key={index}> {item} <button onClick={() => deleteItem(index)}>Delete</button> </li>
          ))}
          <button onClick={deleteAllItem}>delete all</button>
        </ul>  
      )}
    </>
  );
}

export default Input;