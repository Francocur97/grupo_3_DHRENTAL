// FUNCION DONDE SE GUARDA LOS DATOS EN SESSION PARA SER ACCEDIDOS EN TODA LA APLICACION, MAS OPCION DE RECORMARME EN COOKIES.

const controllers = require("../controllers/usersControllers");



function userLoggedMiddleware(req,res,next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.email;
    let userFromCookie = controllers.findByField('email', emailInCookie);
    
    console.log(req.cookies);
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
        console.log(userFromCookie.rol)
        }
    if(userFromCookie && userFromCookie.rol  == "admin"){
        res.locals.admin = true;
}
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next();

}

module.exports = userLoggedMiddleware; 
