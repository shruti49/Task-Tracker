import React, { Component } from "react";

class TodoList extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.completed ? "line-through" : "none"
    };
  };

  render() {
    const { todolist } = this.props;
    return (
      <ul>
        {todolist.map((list, index) => (
          <li key={list.id} id={index}>
            {console.log(list.id)}
            <span>
              <input type="checkbox" />
            </span>
            {list.title}
            <span>{list.date}</span>
            <span>
              <button onClick={() => this.props.deleteTodo(list.id)}>X</button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
