const JWT = require('jsonwebtoken')

class login{
    async tockeLogin(inicia){
        return await JWT.sign(
            {
                name: inicia.usuario,
                role: inicia.rol
            },
            process.env.SECRETO,
            {
                expiresIn:'2m'
            }
        )
    }
}

module.exports = new login();