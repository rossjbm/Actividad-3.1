const loginModel = require("../models/login.m")

class login {
    validar(parametro){
        //Vamos a ver si el usuario existe en la base de datos
        
        const usuario = loginModel.verificaUser(parametro.usuario)
            
        


    }
}






var loginC = new login()
module.exports = loginC