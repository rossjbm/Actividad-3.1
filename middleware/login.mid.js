const Verificadorneitor3000 = require("../helpers/login.h")

class verificador3000{
     verificador(token){
        console.log("llega");
        new Promise((resolve, reject) => {
            Verificadorneitor3000.verificarToken(token)

            .then((sellado)=>{
                resolve(sellado)

            })
            .catch((err)=>{
                reject(err)
            })

        })
        
    }
}
module.exports = new verificador3000();