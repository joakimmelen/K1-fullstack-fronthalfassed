import React from "react";
import { TrashIcon, CheckIcon } from "@heroicons/react/outline";
import Styles from "./TodoList.module.css";
import axios from "axios";

function todoList(props) {
  const url = "http://localhost:666/api/todos";

  const changeTodo = async (item) => {
    const json = JSON.stringify({ done: true });
    const { id, done, title } = item;
    await axios.patch(`${url}/${id}`, json);
    props.getTodos();
  };

  const removeTodo = async (item) => {
    const { id, done, title } = item;
    await axios.delete(`${url}/${id}`);
    props.getTodos();
  };

  return (
    <div>
      <ul className={Styles.listContainer}>
        {props.todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className={todo.done ? Styles.doneContainer : Styles.container}
            >
              <li key={todo.id} className={Styles.singleTodo}>
                <h3 className={Styles.title}>{todo.title}</h3>
                <div className={Styles.logoContainer}>
                  <CheckIcon
                    className={Styles.logos}
                    value={todo.id}
                    onClick={() => changeTodo(todo)}
                  />
                  <TrashIcon
                    className={Styles.logos}
                    value={todo.id}
                    onClick={() => removeTodo(todo)}
                  />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default todoList;
