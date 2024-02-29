const mongoose = require('mongoose');

// Define el esquema de datos para los todos
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// Modelo de Mongoose basado en el esquema definido
const Todo = mongoose.model('Todo', todoSchema);

class DataLayerTodos {
  async getAllTodos() {
    const todos = await Todo.find();
    return todos;
  }

  async createTodo(todoData) {
    const newTodo = await Todo.create(todoData);
    return newTodo;
  }

  async deleteTodo(id) {
    await Todo.findByIdAndDelete(id);
  }
}

module.exports = new DataLayerTodos();
