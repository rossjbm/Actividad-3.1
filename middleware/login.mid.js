const Verificadorneitor3000 = require("../helpers/login.h")

class verificador3000{
    async verificador(req, res, next){
        console.log("llega");
        try{
            const token= req.headers.authorization.split(' ').pop()
            var sellado = await Verificadorneitor3000.verificarToken(token) 
            if(sellado == null){
                res.status(404)
                return res.send("Token Invalido")
            }
            return next()
            
        }catch(error) {
            console.log('error al verificar');
            console.log(error);
            res.status(404)
            return res.send(error)
        }
    }  
     async verificadorDeRol(req, res, next){
        console.log("llega");
        try{
            const token= req.headers.authorization.split(' ').pop()
            var sellado = await Verificadorneitor3000.verificarToken(token)
            if(sellado == null){
                res.status(404)
                return res.send("Token Invalido")
            }
            if (sellado.rol = 'solicitante') {
                res.status(404)
                return res.send("No tienes el rol necesario")
            }
            return next()
            
        }catch(error) {
            console.log('error al verificar');
            console.log(error);
            res.status(404)
            return res.send(error)
        }
    }
}
module.exports = new verificador3000();