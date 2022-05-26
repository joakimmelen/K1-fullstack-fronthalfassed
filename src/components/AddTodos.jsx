import axios from "axios";
import { useState } from "react";
import Styles from "./addTodos.module.css";
import Todo from "./Todo";

const AddTodos = ({ todos }) => {
  // const AddTodos = ({ todos, lazyFunc }) => {
  const [todoInput, setTodoInput] = useState("");

  const postData = async () => {
    const input = { title: todoInput, done: false };
    const json = JSON.stringify(input);
    console.log(json);
    await axios.post("http://localhost:666/api/todos", json);
  };

  const handleClick = (e) => {
    e.preventDefault();
    lazyFunc();
    if (todoInput) {
      postData();
      setTodoInput("");
    }
  };

  console.log(todoInput);
  return (
    <form className={Styles.form}>
      <h1>Add Todo</h1>
      <label className={Styles.label} htmlFor="">
        Todo:
      </label>
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        className={Styles.input}
        type="text"
        value={todoInput}
      />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        className={Styles.btn}
      >
        ADD
      </button>
    </form>
  );
};

export default AddTodos;
