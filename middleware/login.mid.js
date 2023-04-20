const Verificadorneitor3000 = require("../helpers/login.h")

class verificador3000{
    async verificador(req, res, next){
        console.log("llega");
        try{
            const token= req.headers.authorization.split(' ').pop()
            var sellado = await Verificadorneitor3000.verificarToken(token) 
            console.log(sellado);
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
}
module.exports = new verificador3000();