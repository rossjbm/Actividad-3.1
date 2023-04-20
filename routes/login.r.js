var express = require('express');
var router = express.Router();
var login = require("../controllers/login.c");
const { error } = require('console');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).render('login', { title: 'INICIAR' });
});
router.post('/', function(req, res, next) {
  const {usuario, contrasena, rol} = req.body
  const parametro = {usuario, contrasena, rol}

  console.log(parametro);
  login.validar(parametro)
  .then ((resultado) => {
    res.status(200).render('login', { title: 'HA INICIADO' });
  })
  .catch((error)=>{
    console.log(error)
    res.status(404).send(error)

  })

});

module.exports = router;

