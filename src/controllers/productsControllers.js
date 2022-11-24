const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');

const productsFilePath = path.join(__dirname + '../../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controllers = {

  
  products: (req, res) => {
// controlador que lleva a todos los productos creados.
    res.render('./products/products', {products});

  },

  productCreate: (req, res) => {
//controlador que lleva a la vista de creacion del producto
    res.render('./products/productCreate');

  },

  store: (req, res) => {
//controlador que guarda el producto
    let newProduct = {
      "id": products[products.length -1]["id"]+1,
      "imagen": req.file.filename,
      "nombre": req.body.titulo,
      "descripcion": req.body.descripcion,
      "precio": req.body.precio,
      "categoria": req.body.categoria,
      "oferta": req.body.oferta
    }

    products.push(newProduct);

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,''));

    res.redirect('/');

  },

 productEdit: (req, res) => {
 //controlador de pagina de edicion del producto
    let product = products.find(product =>
      product.id == req.params.id);
    res.render('./products/productEdit', {product});

  },

 
  productDetail: (req, res) => {
     //controlador de detalle del producto en particular
      let product = products.find(product =>
      product.id == req.params.id);
    res.render('./products/productDetail', {product});

  },

  
  productCart: (req, res) => {
  //controlador del carrito de compras
    res.render('./products/productCart')
  },

  //controlador de eliminacion del producto
  delete: (req, res) => {

    let productDelete = req.params.id;

    let product = products.filter(product =>
      product.id != productDelete);

    let productStore = JSON.stringify(product);

    fs.writeFileSync(__dirname + '../../database/products.json', productStore);

    res.redirect('/');

  }
};

module.exports = controllers;