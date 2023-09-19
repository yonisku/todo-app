import { useState } from "react";

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState("");

  //Add data through API
  const addTodo = () => {
    const newTodo = { title, done: false }; //Initial data
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    }).then(() => {
      //If Success
      setTitle(""); //Reset Form
      setRefresh(true);
    });
  };

  return (
    <div id="todo-header" className="header">
      <h2>My To Do List</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <span className="addBtn" onClick={addTodo}>
        Add
      </span>
    </div>
  );
};

export default Header;
