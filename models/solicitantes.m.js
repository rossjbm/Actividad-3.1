const connection = require('./conexion');

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
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO `solicitantes` set ?", [parametro], function (error, results, fields) {
                if (error) throw error;
                resolve("Se agrego correctamente");
            })

        })
    }
}

module.exports = new solicitantesModel();