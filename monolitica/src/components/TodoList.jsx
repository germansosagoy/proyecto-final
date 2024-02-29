// client/src/components/TodoList.js
import { useState } from 'react';

function TodoList({ todos, addTodo, removeTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Agregar Item</button>
    </div>
  );
}

export default TodoList;
