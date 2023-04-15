const personalModel = require("../models/personal.m")

class personalControllers {
  //listar general
  listar(){
    return new Promise((resolve, reject) => {
      personalModel.listar()
      .then((resultado) => {
        if (resultado.length == 0) {
          return resolve('Por ahora no hay personal registrado :)')
        }
        resolve(resultado)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  //listar por cedula
  listarCedula(parametro) {
    return new Promise((resolve, reject) => {
      personalModel.listarCedula(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe personal');
           return resolve(`No hay personal registrados con esa CI: ${parametro}`)
        };
        resolve(resultado);
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

    //agregar un personal
    agregar(parametro){
      console.log(parametro);
      return new Promise((resolve, reject) => {
        // el if compara lo que se debe tener para agregar 
        if (!parametro || !parametro.usuario_unico || !parametro.nombre || !parametro.CI || !parametro.cargo || !parametro.especialidad || !parametro.contrasena) {
          return reject("Se debe ingresar correctamente los parametros")
        }
        personalModel.agregar(parametro)
        .then((resultado) =>  {
          resolve(resultado)
        })
        .catch((err) => {
          reject(err)
        })
      })
    }


  //eliminar personal
  eliminar(parametro) {
    return new Promise((resolve, reject) => {
      personalModel.listarCedula(parametro)
      .then((json) => {
        let resultado = JSON.parse(json)
        if (resultado.length == 0) {
           console.log('No existe personal');
           return resolve(`No hay personal registrado con el id: ${parametro}`)
        };
        const eliminado = new Promise((resolve, reject) => {
          personalModel.eliminar(parametro)
          .then(() => {
            console.log('ya se elimino')
            resolve(`se ha eliminado la reserva con el id: ${parametro}`);
          })
          .catch((err) => {
            reject(err);
          })
        })
        resolve(eliminado);
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = new personalControllers();