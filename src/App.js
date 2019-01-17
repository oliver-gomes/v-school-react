import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
function App() {
  const data = todosData.map(todo => {
    return <TodoItem text={todo.text} />;
  });

  return <div className="todo-list">{data}</div>;
}

export default App;
