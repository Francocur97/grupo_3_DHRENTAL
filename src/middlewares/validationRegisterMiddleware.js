// VALIDACIONES DEL PROCESO DE REGISTRACION DEL USUARIO

const { body } = require('express-validator');

const validations = [

    body('nombre').notEmpty().withMessage('Debes completar este campo'),
    body('apellido').notEmpty().withMessage('Debes completar este campo'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debe ser un formato de correo válido'),
    body('password').notEmpty().withMessage('Debes completar este campo'),
    body('domicilio').notEmpty().withMessage('Debes completar este campo'),
    body('celular').notEmpty().withMessage('Debes completar este campo'),
    body('imagen').custom((value,{ req })=>{

        let file = req.file;
        
        if(!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            return true
        }
    })
]

module.exports = validations;