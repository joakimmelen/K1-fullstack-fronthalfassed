import "./App.css";
import AddTodos from "./components/AddTodos";
import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:666/api/todos");
    setTodos(response.data);
  };
  console.log(todos);
  // const [lazy, setLazy] = useState(false);
  // const lazyFunc = () => {
  //   setLazy(!lazy);
  // };

  useEffect(() => {
    fetchTodos();
    // }, [lazy]);
  }, []);

  return (
    <div className="App">
      <AddTodos />
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
        // <AddTodos lazyFunc={lazyFunc} />
        // {todos.map((todo) => {
        //   return <Todo key={todo.id} todo={todo} lazyFunc={lazyFunc} />;
      })}
    </div>
  );
}

export default App;
