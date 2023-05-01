//const uuidv1 = require('uuid');
const { v4: uuidv4 } = require('uuid');

const redisRepository = require('../repository/redisRepository');

module.exports = {
    generatedCache: async (req,res, next) => {
 
     let token = uuidv4();
     await redisRepository.set(token, req.body.values); //valor que vai vir pelo body 
     obj = { token }
     res.send(obj);
     next();

    }, 

    getUser: function(req, res, next) {
 
       redisRepository.get(req.params.p1).then((result) => {
        
        if(result) {
            res.set('Content-Type','application/json');
            res.send(result);
            next();
        }
        else {
            res.send("Token não encontrado!");
            next();
        }
        

       });

    }

}