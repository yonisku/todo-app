import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

// Main Component
const App = () => {
  const [isRefresh, setIsRefresh] = useState(true);

  //Refresh function
  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  //Render Component
  return (
    <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  );
};

export default App;
