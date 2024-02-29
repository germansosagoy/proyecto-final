const DataLayerTodos = require('./dataService');

class BusinessLogicTodos {
  async getAllTodos() {
    // Obtener todos los todos desde la capa de datos
    const todos = await DataLayerTodos.getAllTodos();
    return todos;
  }

  async createTodo(text) {
    // Crear un nuevo TODO utilizando la capa de datos
    const newTodo = await DataLayerTodos.createTodo({ text });
    return newTodo;
  }

  async deleteTodo(id) {
    await DataLayerTodos.deleteTodo(id);
  }
}

module.exports = new BusinessLogicTodos();
