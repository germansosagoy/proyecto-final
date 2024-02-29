// data-layer.js
class DataLayer {
    constructor() {
      // En esta simulación, estaría conectada a una base de datos
      this.data = [];
    }
    // agrega datos a la base de datos simulada
    addData(item) {
      this.data.push(item);
    }
    // obtiene odos los datos de la base de datos simulada
    getAllData() {
      return this.data;
    }
    // elimina un dato de la base de datos simulada por el ID
    deleteDataById(id) {
      this.data = this.data.filter(item => item.id !== id);
    }
  }
  
  module.exports = new DataLayer();
  