const loginModel = require("../models/login.m")
const bcryptjs = require("bcryptjs")
const loginH = require("../helpers/login.h")
const cookie = require('cookie')

class login {
    validar(parametro){
        console.log('Controladores');
        //Vamos a ver si el usuario existe en la base de datos
        return new Promise((resolve, reject) => {
            loginModel.verificaUser(parametro.usuario) 
            .then (async (results) => {
                const confirmado = await bcryptjs.compare(parametro.contrasena, results.contrasena)
                console.log(confirmado); // Dice si es false o true
                // El if de abajo es para cuando sea false mande ese resolve (luego lo cambio por reject)
                if (!confirmado) {
                    return reject("error en la contraseña")
                }
                if (parametro.rol != results.rol) {
                    return reject("Rol incorrecto")
                }
                const resultado = loginH.tockeLogin(parametro)
                const Galleta = cookie.serialize('GalletaDeToken', resultado, {
                    httpOnly: true,
                    secure: process.env.VERI =="produccion",
                    sameSite:'strict',
                    maxAge: '30m',
                    path:'/'

                })
                resolve(Galleta)
            })
            .catch ((error) => {
                reject(error)
            })
        })
    }
}






var loginC = new login()
module.exports = loginC