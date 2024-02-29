// presentation-layer.js
const express = require('express');
const bodyParser = require('body-parser');
const todoService = require('../business/businessLayer');
const app = express();
app.use(bodyParser.json());

// Ruta para obtener todas las tareas
app.get('/todos', (req, res) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
});

// Ruta para crear una nueva tarea
app.post('/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = todoService.createTodo(text);
  res.status(201).json(newTodo);
});

// Ruta para eliminar una tarea por ID
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todoService.deleteTodo(id);
  res.json({ message: 'Todo deleted successfully' });
});

app.listen(3000, () => {
  console.log('Presentation Layer listening on port 3000');
});
