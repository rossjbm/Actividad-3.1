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
    async verificarToken(Token){
        console.log("llegaa");
        // return new Promise( (resolve, reject) => {

            // JWT.verify(Token,process.env.SECRETO, function(err, decoded) {
            //     if (err) {
            //         console.log(err.message);
            //         return reject(err.message)
            //     }
                
                
            //     console.log("Salimos :"+decoded);
            //     resolve(decoded)

            //   });
              
            try {
                const sellado = JWT.verify(Token,process.env.SECRETO);
                 return sellado
              } catch(error) {
                console.log("error correcto");
                return error
            }

        //     const sellado = JWT.verify(Token,process.env.SECRETO,{})
        //     console.log(sellado);
        //         resolve(sellado)

        // })


        //      const sellado = await JWT.verify(Token,process.env.SECRETO)
        //      return sellado
        // } catch(err){
        //     return null
        // }


    }
}

module.exports = new login();