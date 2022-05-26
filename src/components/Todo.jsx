import Styles from "./todo.module.css";
import { TrashIcon, CheckIcon, PencilIcon } from "@heroicons/react/outline";
import axios from "axios";

const Todo = ({ todo }) => {
  // const Todo = ({ todo, lazyFunc }) => {
  const deleteTodo = () => {
    // lazyFunc();
    // const jsonId = JSON.stringify(todo.id);
    console.log(todo.id);
    axios.delete(`http://localhost:666/api/todos/${todo.id}`).then((res) => {
      return;
    });
  };
  const checkTodo = () => {
    lazyFunc();
    // const jsonId = JSON.stringify(todo.id);
    axios.patch(`http://localhost:666/api/todos/${todo.id}`);
    // console.log(jsonId);
  };
  const changeTodo = () => {
    lazyFunc();
    // const jsonId = JSON.stringify(todo.id);
    axios.put(`http://localhost:666/api/todos/${todo.id}`);
    // console.log(jsonId);
  };
  const getSingleTodo = async (e) => {
    lazyFunc();
    // const jsonId = JSON.stringify(todo.id);
    const singleTodo = await axios.get(
      `http://localhost:666/api/todos/${todo.id}`
    );
    const singlerTodo = singleTodo.data.id;
    // const todo = singleTodo.data;
    if (singleTodo) {
      alert("you got a single todo");
    }
    console.log("test", singlerTodo);
  };

  const onDelete = (e) => {
    // e.preventDefault();
    deleteTodo();
    console.log("delete");
  };
  const onChange = () => {
    changeTodo();
    console.log("change");
  };
  const onCheck = () => {
    checkTodo();
  };
  const getSingle = (e) => {
    getSingleTodo();
  };

  return (
    <div className={todo.done ? Styles.doneContainer : Styles.container}>
      <h3 className={Styles.title}>{todo.title}</h3>
      <div className={Styles.logoContainer}>
        <TrashIcon onClick={(e) => onDelete(e)} className={Styles.logos} />
        <CheckIcon onClick={() => onCheck()} className={Styles.logos} />
        <PencilIcon onClick={() => onChange()} className={Styles.logos} />
        <button
          className={Styles.btn}
          onClick={() => {
            getSingle();
          }}
        >
          Get single
        </button>
      </div>
    </div>
  );
};

export default Todo;
