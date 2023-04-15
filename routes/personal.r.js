var express = require('express');
var router = express.Router();

var personalControllers = require("../controllers/personal.c.js")

//listar
router.get('/', function(req, res, next) {
  personalControllers.listar()
  .then((resultado)=>{
    res.send(resultado)
  })
  .catch((err)=>{
    res.send(err)
  })
});
//mostrar por cedula
router.get('/:CI', function(req, res, next) {
  const parametro = req.params.CI
  personalControllers.listarCedula(parametro)
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
});

// post
router.post('/agregar', function(req, res, next) {
  const { usuario_unico, nombre, CI, cargo, especialidad, contrasena} = req.body
  const parametro = { usuario_unico, nombre, CI, cargo, especialidad, contrasena}
  personalControllers.agregar(parametro)
  .then((resultado) => {
    console.log("se agrego correctamente :)")
    res.send(resultado);
  })
  .catch((err) => {
    console.log("error")
    res.send(err)
  })
});


//eliminar
router.delete('/eliminar/:CI', function(req, res, next) {
  const parametro = req.params.CI
  personalControllers.eliminar(parametro)
  .then((resultado) => {
    res.send(resultado);
  })
  .catch((err) => {
    res.send(err)
  })
})   //PROBAR CON /eliminar/4

module.exports = router;