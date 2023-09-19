//Receive data "todo" and render it into TodoItem component
const TodoItem = ({ todo, setRefresh }) => {
  //Update data through API
  const updateTodo = () => {
    todo.done = !todo.done;
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }).then(() => {
      setRefresh(true);
    });
  };

  //Delete data through API
  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE"
    }).then(() => {
      setRefresh(true);
    });
  };

  //Render Component
  return (
    <>
      <li className={`${todo.done ? "checked" : ""}`}>
        <div onClick={updateTodo}>{todo.title}</div>
        <span className="close" onClick={deleteTodo}>
          x
        </span>
      </li>
    </>
  );
};

export default TodoItem;
