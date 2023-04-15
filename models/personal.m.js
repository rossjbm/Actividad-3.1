const connection = require('./conexion');

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
        return new Promise((resolve, reject) => {
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