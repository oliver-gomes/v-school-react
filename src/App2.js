import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    };

    this.handleChange = this.handleChange.bind();
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
      </form>
    );
  }
}

export default App;
