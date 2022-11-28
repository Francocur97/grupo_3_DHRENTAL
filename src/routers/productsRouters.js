
const express = require('express');
const path = require ('path');
const router = express.Router();
const multer = require('multer');

const productsControllers =  require('../controllers/productsControllers');

const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        let folder = path.join(__dirname, '../../public/images/products');
        callback(null,folder);

    },
    filename: (req, file, callback) => {

        let imageName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null,imageName);

    }

});

let upload = multer ({ storage : storage });

//ruta de la vista de la creacion del producto
router.get('/productCreate',productsControllers.productCreate);
//ruta de la creacion del producto
router.post('/create',upload.single('imagen'),productsControllers.store);
//ruta de la vista del detalle de cada producto
router.get('/productDetail/:id',productsControllers.productDetail);
//ruta de la vista de todos los productos
router.get('/products',productsControllers.products)
//ruta del carrito de compras
router.get('/productCart',productsControllers.productCart);
//ruta q lleva a la edicion del producto en particular
router.get('/productEdit/:id',productsControllers.productEdit);
//ruta q actualiza el producto en particular
router.put('/productEdit/:id',upload.single('imagen'),productsControllers.update);
//ruta q lleva al borrado del producto en particular
router.delete('/delete/:id', productsControllers.delete);


module.exports = router ;