import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import CreateTodo from "./components/CreateTodo";

import { BrowserRouter, Route } from "react-router-dom";
import uuid from "uuid";

class App extends Component {
  state = {
    input: "",
    date: "",
    todos: []
  };

  createTodos = event => {
    this.setState({
      input: event.target.value
    });
  };

  inputDate = date => {
    this.setState({ date });
    console.log(date);
  };

  handleSubmit = event => {
    const item = {
      id: uuid.v4(),
      title: this.state.input,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, item]
    });
    event.preventDefault();
  };

  deleteTodo = id => {
    console.log(id);
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    const { todos, input, date } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <CreateTodo
              input={input}
              date={date}
              inputDate={this.inputDate}
              handleSubmit={this.handleSubmit}
              createTodos={this.createTodos}
              deleteTodo={this.deleteTodo}
              todos={todos}
            />
          )}
        />
        <Route
          path="/searchTodos"
          render={() => (
            <SearchBar searchTodos={this.searchTodos} todos={todos} />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
