var express = require('express');
var router = express.Router();
var login = require("")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SALA DE AUDIOVISUALES' });
});

module.exports = router;

