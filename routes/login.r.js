var express = require('express');
var router = express.Router();
var login = require("../controllers/login.c");
const { error } = require('console');

/* GET home page. */
router.post('/', function(req, res, next) {
  const {usuario, contrasena, rol} = req.body
  const parametro = {usuario, contrasena, rol}
  // const { nombre, direccion, descripcion, estatus} = req.body
  // const parametro = { nombre, direccion, descripcion, estatus}

  console.log(parametro);
  login.validar(parametro)
  .then ((resultado) => {
    res.send(resultado);
  })
  .catch((error)=>{
    console.log(error)
    res.status(404)
    res.send(error)
  })

});

module.exports = router;

