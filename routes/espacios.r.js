var express = require('express');
var router = express.Router();

//importar controladores OJO, NO MODIFICAR
var espaciosControllers = require("../controllers/espacios.c.js")



//LISTAR
router.get('/', function(req, res, next) {
  console.log('ESTAMOS EN RUTA');
  espaciosControllers.listar()
  .then ((resultado) => {
    res.send(resultado);
  })
  .catch ((err) => {
    res.send(err)
  })
});

router.get('/:id', function(req, res, next) {
  let parametro = req.params.id
  espaciosControllers.listarID(parametro)
  .then((resultado) => {
    res.send(resultado)
  })
  .catch((err) => {
    res.send(err)
  })
});

//MODIFICAR ESPACIOS 
router.put('/modificar/:id', function(req, res, next) {
  const parametro = req.params.id; 
  let { nombre , direccion , descripcion , estatus } = req.body; 
  const espacioModificar = { nombre , direccion , descripcion , estatus } 
  espaciosControllers.modificar(parametro, espacioModificar)
  .then((modificado) => {
    res.send(modificado)
  })
  .catch((err) => {
    res.send(err)
  })
})

//AGREGAR ESPACIOS
router.post('/agregar', function(req, res, next) {
  const { nombre, direccion, descripcion, estatus} = req.body
  const parametro = { nombre, direccion, descripcion, estatus}
  espaciosControllers.agregar(parametro)
  .then((resultado) => {
    console.log("se agrego correctamente :)")
    res.send(resultado);
  })
  .catch((err) => {
    console.log("errorrrrrrr")
    res.send(err)
  })
});



module.exports = router;