function adminMiddleware(req,res,next){
    if(req.session.userLogged && req.session.userLogged.rol != "admin" ){
    return res.redirect('error404');
    }
    if(!req.session.userLogged){
        return res.redirect('error404');
    }
    next();
};

module.exports = adminMiddleware;