// FUNCION DONDE SE GUARDA LOS DATOS EN SESSION PARA SER ACCEDIDOS EN TODA LA APLICACION, MAS OPCION DE RECORMARME EN COOKIES.

const controllers = require("../controllers/usersControllers");
const db = require('../database/models');

let userFind = db.User.findOne({where:{email:'edudesm@gmail.com'}})
      .then(function(user){user})

function userLoggedMiddleware(req,res,next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.email;
    
    if(userFind && emailInCookie==true){
        req.session.userLogged = userFind;
        }
    if(userFind && userFind.rol  == "admin" && emailInCookie==true){
        res.locals.admin = true;
}
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next();

}

module.exports = userLoggedMiddleware; 
