var express = require('express');
var router = express.Router();
var login = require("../controllers/login.c")

/* GET home page. */
router.get('/', function(req, res, next) {
  const {usuario, contrasena, rol} = req.body
  const parametro = {usuario, contrasena, rol}
  login.validar


});

module.exports = router;

