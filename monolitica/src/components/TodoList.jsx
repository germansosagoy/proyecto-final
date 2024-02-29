// client/src/components/TodoList.js
import { useState } from 'react';

function TodoList({ todos, addTodo, removeTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') { addTodo(newTodo); setNewTodo('')}
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)} className='px-4 py-2 bg-red-700 text-white rounded-xl'>Eliminar</button>
          </li>
        ))}
      </ul>
      <input 
      className=' border-2 border-black m-1  p-1 px-2 rounded-md' 
      type="text" 
      value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
      />
      <button 
      className='px-4 py-2 m-1 rounded-xl text-base font-medium bg-cyan-700 text-white' 
      onClick={handleAddTodo}>Agregar Item</button>
    </div>
  );
}

export default TodoList;
