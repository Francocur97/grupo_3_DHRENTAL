// MULTER DE USUARIOS
const path = require('path');
const multer = require('multer');
const { MulterError } = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        let folder = path.join(__dirname, '../../public/images/users');
        callback(null,folder);

    },
    filename: (req, file, callback) => {
    
        let imageName = 'user-' + Date.now() + path.extname(file.originalname);
        callback(null,imageName);
        
    }

});

let upload = multer ({ storage, fileFilter(req,file,cb){
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif'){
        cb(null,true)
    }else{
        cb(null,false)
        return cb(new Error("Solo se admite archivos .jpg, jpeg, .png, gif"));
    }
} 
});

module.exports = upload;
