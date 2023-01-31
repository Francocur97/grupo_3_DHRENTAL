function adminMiddleware(req,res,next){
    if(req.session.userLogged && req.session.userLogged.rol != "admin"){
    return res.status(401).redirect('error404');
    }
    next();
};

module.exports = adminMiddleware;