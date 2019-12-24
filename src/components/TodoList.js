import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./list.style.css";

class TodoList extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.completed ? "line-through" : "none"
    };
  };

  render() {
    const { todolist } = this.props;
    return (
      <ul className="todo-list">
        {todolist.map((list, index) => (
          <li key={list.id} id={index} className="todo-item">
            {console.log(list.id)}
            <span>
              <input type="checkbox" className="input-check"/>
            </span>
            {list.title}
            <span>{list.date}</span>
            <span>
              <button onClick={() => this.props.deleteTodo(list.id)} className="trash-btn">
                <FontAwesomeIcon icon={faTrash} className="trash-icon"/>
              </button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
