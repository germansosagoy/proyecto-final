const express = require('express');
const bodyParser = require('body-parser');
const todoService = require('./businessLogic');
const app = express();
app.use(bodyParser.json());

// Ruta para obtener todas las tareas
app.get('/todos', (req, res) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
});

// Ruta para obtener una tarea por ID
app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todoService.getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Ruta para crear una nueva tarea
app.post('/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = todoService.createTodo(text);
  res.status(201).json(newTodo);
});

// Ruta para actualizar una tarea por ID
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const updatedTodo = todoService.updateTodo(id, text);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Ruta para eliminar una tarea por ID
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const deletedTodo = todoService.deleteTodo(id);
  if (deletedTodo) {
    res.json({ message: 'Todo deleted successfully' });
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(3000, () => {
  console.log('Presentation Layer listening on port 3000');
});
