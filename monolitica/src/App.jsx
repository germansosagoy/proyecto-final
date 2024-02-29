import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h1>Mi App Monolitica</h1>
        <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      </div>
    </>
  );
}

export default App;
