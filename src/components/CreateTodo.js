import React, { Component } from "react";

import TodoList from "../components/TodoList";

//import DateTimePicker from "react-datetime-picker";
import { Link } from "react-router-dom";

import "./create.style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class CreateTodo extends Component {
  render() {
    const { input, date, todos } = this.props;
    return (
      <>
        <form onSubmit={this.props.handleSubmit} className="todo-form">
          <input
            type="text"
            onChange={this.props.createTodos}
            value={input}
            className="todo-input"
            placeholder="Enter a todo.."
          />
          <button className="todo-btn">Add</button>
          <TodoList todolist={todos} deleteTodo={this.props.deleteTodo} />
        </form>

        <Link to="/searchTodos" className="search-link">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </Link>
      </>
    );
  }
}

export default CreateTodo;
{
  /* <DateTimePicker
            onChange={this.props.inputDate}
            value={date}
            className="todo-date"
            /> */
}
