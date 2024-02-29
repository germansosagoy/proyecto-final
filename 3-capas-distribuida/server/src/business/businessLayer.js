// business-logic-layer.js
class BusinessLogic {
    constructor() {
      this.data = [];
    }
    // Método para agregar datos al array 'data'
    addData(item) {
      this.data.push(item);
    }
  
    // Método para procesar los datos
    processData() {
      this.data.forEach(item => {
        console.log(`Procesando en la capa de lógica de negocio: ${item}`);
      });
    }
  
    // Método para obtener los datos
    getData() {
      return this.data;
    }
  }

  module.exports = new BusinessLogic();
  