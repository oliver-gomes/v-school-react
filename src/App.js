import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  state = {
    todos: todosData
  };
  render() {
    const todoItems = this.state.todos.map(item => {
      return <TodoItem key={item.id} item={item} />;
    });

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
