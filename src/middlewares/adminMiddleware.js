const controllers = require("../controllers/usersControllers");

function adminMiddleware(req,res,next){

    let emailInCookie = req.cookies.email;
    let userFromCookie = controllers.findByField('email', emailInCookie);

    if(userFromCookie && userFromCookie.rol  == undefined){
       
    res.redirect('error404');
    }
        next();
    
   
};

module.exports = adminMiddleware;