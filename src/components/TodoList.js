import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ isRefresh, setRefresh }) => {
  const [todos, setTodos] = useState([]);
  //Fetch data through API
  useEffect(() => {
    if (isRefresh) {
      console.log(isRefresh); //True

      fetch("http://localhost:8000/todos")
        .then((res) => {
          return res.json();
        }) //If Success
        .then((data) => {
          setRefresh(false);
          setTodos(data);
        }) //If Error
        .catch((err) => {
          setRefresh(false);
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            throw err;
          }
        });
    }
  }, [isRefresh, setRefresh]);

  return (
    //Mapping array as an item, and send it as a props to TodoItem Component
    <>
      <ul id="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setRefresh={setRefresh} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
