import React, { Component } from "react";
import PropTypes from "prop-types";

import TodoList from "../components/TodoList";

import { Link } from "react-router-dom";

class SearchBar extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  state = {
    query: ""
  };

  searchTodos = event => {
    this.setState({
      query: event.target.value.trim()
    });
  };

  render() {
    const { query } = this.state;
    const { todos } = this.props;
    const searchedTodos = todos.filter(list =>
      list.title.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <>
        <form>
          <Link to="/">Create Todo</Link>
          <input type="search" value={query} onChange={this.searchTodos} />
        </form>
        {this.state.query !== "" && <TodoList todolist={searchedTodos} />}
      </>
    );
  }
}

export default SearchBar;
