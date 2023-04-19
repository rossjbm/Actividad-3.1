const loginModel = require("../models/login.m")
const bcryptjs = require("bcryptjs")

class login {
    validar(parametro){
        //Vamos a ver si el usuario existe en la base de datos
        return new Promise((resolve, reject) => {
            loginModel.verificaUser(parametro.usuario) 
            .then (async (resultado_Json) => {

                const confirmado = await bcryptjs.compare(parametro.contrasena, resultado_Json.contrasena)
                
                console.log(confirmado); // Dice si es false o true
                // El if de abajo es para cuando sea false mande ese resolve (luego lo cambio por reject)
                if (!confirmado) {
                    return resolve("error en la contraseña")
                }
// AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

                resolve("confirmado")
            })
            .catch ((error) => {
                reject(error)
            })

        })
        
            
        


    }
}






var loginC = new login()
module.exports = loginC