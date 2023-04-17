const connection = require('./conexion');
//importamos bcrypt
const bcrypt = require('bcrypt');

class personalModel{
    //listar general
    listar(){
        return new Promise((resolve, reject)=>{
            connection.query ('SELECT * FROM `personal`', function (error, results, fields) {
                if (error) throw error;
                resolve (results);
            }) 
        })
    }

    //listar por cedula
    listarCedula(parametro) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `personal` WHERE CI = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                let json = JSON.stringify(results);
                console.log(results)
                resolve (json);
            })
        })
    }

    //agregar personal
    agregar(parametro){
        console.log("llegamos a modulos klk")
        return new Promise(async (resolve, reject) => {

            //Encriptar contraseñas
            var contrasenaHash = await bcrypt.hash(parametro.contrasena, 8);
            parametro.contrasena = contrasenaHash;
            //añadir a los usuarios
            connection.query(`INSERT INTO usuarios (usuario, contrasena, rol) VALUES ("${parametro.usuario_unico}", "${parametro.contrasena}", "admin")`, function (error, results, fields) {
                if (error) reject (error);
                resolve("Se agrego correctamente el usuario");
            })
            connection.query("INSERT INTO `personal` set ?", [parametro], function (error, results, fields) {
                if (error) reject (error);
                resolve("Se agrego correctamente");
            })

        })
    }

    //eliminar
    eliminar(parametro){
        console.log('estoy eliminando')
        return new Promise((resolve, reject) => {
            console.log(`vamos a eliminar ${parametro}`)
            connection.query('DELETE FROM `personal` WHERE CI = ?' , [parametro] , function (error, results, fields) {
                if (error) throw error;
                resolve()
            })
        })
    }
    
}

module.exports= new personalModel();