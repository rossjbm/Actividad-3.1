require('dotenv').config();
var mysql = require('mysql');
const { HOST, USER, PASSWORD, DATABASE} = process.env
var connection = mysql.createConnection({HOST, USER, PASSWORD, DATABASE}); 
 
connection.connect(function (err) {
    if (err) {
        console.error('Error de Conexión: ' + err.stack);
        return;
    }

    console.log ('CONECTADO CON LA BASE DE DATOS' + connection.threadId);
});
 

module.exports = connection;