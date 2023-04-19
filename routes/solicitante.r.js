var express = require('express');
var router = express.Router();

//importar controladores 
var solicitantesControllers = require("../controllers/solicitantes.c.js")
//importamos bcrypt
const bcryptjs = require('bcryptjs');

//mostrar
router.get('/', function(req, res, next) {
  solicitantesControllers.listar()
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});

//busqueda por Cedula
router.get('/:CI', function(req, res, next) {
  const parametro = req.params.CI
  solicitantesControllers.listar_Cedula(parametro)
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});


//agregar
router.post('/agregar', function(req, res, next) {
  const { usuario_unico, nombre_apellido, CI, fecha_nacimiento, direccion, contrasena, nro_telefono} = req.body
  const parametro = { usuario_unico, nombre_apellido, CI, fecha_nacimiento, direccion, contrasena, nro_telefono}
  solicitantesControllers.agregar(parametro)
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    console.log("errorrrrrrr")
    res.send(err)
  })
});

module.exports = router;