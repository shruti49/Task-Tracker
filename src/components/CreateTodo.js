import React, { Component } from "react";

import TodoList from "../components/TodoList";

import DateTimePicker from "react-datetime-picker";
import { Link } from "react-router-dom";

class CreateTodo extends Component {
  render() {
    const { input, date, todos } = this.props;
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" onChange={this.props.createTodos} value={input} />
          <DateTimePicker onChange={this.props.inputDate} value={date} />
          <button>Add</button>
        </form>
        <TodoList todolist={todos} deleteTodo={this.props.deleteTodo} />
        <Link to="/searchTodos">Search</Link>
      </>
    );
  }
}

export default CreateTodo;
