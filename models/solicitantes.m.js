const connection = require('./conexion');
//importamos bcrypt
const bcrypt = require('bcrypt');

class solicitantesModel {
    ///listar en general
    listar() {
        return new Promise( (resolve, reject) => {
            connection.query('SELECT * FROM `solicitantes`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            })
        })
    }

    //listar por cedula
    listar_Cedula(parametro) {
        console.log('llegamos a modelo')
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `solicitantes` WHERE CI = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results);
                console.log(results)
                resolve (json);
            })
        })
    }

    //agregar solicitantes
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise(async (resolve, reject) => {
            //Encriptar contraseñas
            var contrasenaHash = await bcrypt.hash(parametro.contrasena, 8);
            parametro.contrasena = contrasenaHash;

            //añadir a los usuarios para darle su rol
            connection.query(`INSERT INTO usuarios (usuario, contrasena, rol) VALUES ("${parametro.usuario_unico}", "${parametro.contrasena}", "user")`, function (error, results, fields) {
                if (error) reject (error);
                resolve("Se agrego correctamente el usuario");
            })

            connection.query("INSERT INTO `solicitantes` set ?", [parametro], function (error, results, fields) {
                if (error) throw error;
                resolve("Se agrego correctamente");
            })

        })
    }
}

module.exports = new solicitantesModel();