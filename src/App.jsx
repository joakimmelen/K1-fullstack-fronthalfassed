import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:666/api/todos";

  const getTodos = async () => {
    const { data } = await axios.get(url);
    setTodos(data);
  };

  const addTodo = async (input) => {
    const data = { title: input, done: false };
    const json = JSON.stringify(data);
    await axios.post(url, json);
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <h1>Et voilá, ze list!</h1>
      <InputBox onSubmit={addTodo} />
      <TodoList todos={todos} getTodos={getTodos} />
    </div>
  );
}

export default App;
