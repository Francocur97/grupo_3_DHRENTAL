const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');

const productsFilePath = path.join(__dirname + '../../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controllers = {

  // controlador que lleva a todos los productos creados.
  products: (req, res) => {

    res.render('./products/products', {
      products
    })

  },

  //controlador que lleva a la vista de creacion del producto
  productCreate: (req, res) => {
    res.render('./products/productCreate');
  },

  //controlador que guarda el producto
  store: (req, res) => {

    let newProduct = {
      id: randomUUID(),
      imagen: req.file.filename,
      nombre: req.body.titulo,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      categoria: req.body.categoria,
      oferta: req.body.oferta
    }

    let products = fs.readFileSync(__dirname + '../../database/products.json', {
      encoding: 'utf-8'
    });

    let productJson;
    if (products == '') {
      productJson = [];
    } else {
      productJson = JSON.parse(products);
    }

    productJson.push(newProduct);

    let newProductJson = JSON.stringify(productJson);

    fs.writeFileSync(__dirname + '../../database/products.json', newProductJson);

    res.redirect('/');

  },

  //controlador de pagina de edicion del producto
  productEdit: (req, res) => {

    let product = products.find(product =>
      product.id == req.params.id);
    res.render('./products/productEdit', {product})

  },

  //controlador de detalle del producto en particular
  productDetail: (req, res) => {
    let product = products.find(product =>
      product.id == req.params.id);
    res.render('./products/productDetail', {
      product
    })

  },

  //controlador del carrito de compras
  productCart: (req, res) => {
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