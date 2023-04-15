var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bd_audiovisuales'
});
 
connection.connect(function (err) {
    if (err) {
        console.error('Error de Conexión: ' + err.stack);
        return;
    }

    console.log ('CONECTADO CON LA BASE DE DATOS' + connection.threadId);
});
 

module.exports = connection;