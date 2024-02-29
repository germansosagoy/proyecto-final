const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Rutas RESTful para las tareas (todos) en este microservicio
app.route('/todos')
  .get(async (req, res) => {
    const todosResponse = await axios.get('http://todos-service/todos');
    res.json(todosResponse.data);
  })
  .post(async (req, res) => {
    const newTodoResponse = await axios.post('http://todos-service/todos', req.body);
    res.status(201).json(newTodoResponse.data);
  });

app.route('/todos/:id')
  .delete(async (req, res) => {
    await axios.delete(`http://todos-service/todos/${req.params.id}`);
    res.json({ message: 'Todo eliminado exitosamente' });
  });

app.listen(3001, () => {
  console.log('Presentation Layer Todos Service corriendo en el puero 3001');
});
