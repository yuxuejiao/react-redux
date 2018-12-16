import React, { Component } from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>to do List</h1>
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
