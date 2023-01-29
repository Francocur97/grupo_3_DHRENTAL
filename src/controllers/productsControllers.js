const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname,'../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');

const controllers = {

  products: (req, res) => {

    db.Products.findAll()
    .then(function(products){
      res.render('./products/products',{products:products})
    }); // TODOS LOS PRODUCTOS

  },

  productCreate: (req, res) => {
    res.render('./products/productCreate'); // RENDERIZA LA PAGINA DE CREACION DEL PRODUCTO
  },

  store: (req, res) => {

    db.Products.create({
      "image": req.file.filename,
      "name": req.body.titulo,
      "description": req.body.descripcion,
      "price": req.body.precio,
      "in_sale": req.body.oferta,
      "category_id": req.body.categoria,
  })
 
  .then(() => {res.redirect('/')}); //CREA O GUARDA EL PRODUCTO

  },

 productEdit: (req, res) => {
 
  db.Products.findByPk(req.params.id)
  .then(function(product){
    res.render('./products/productEdit', {product:product}); // RENDERIZA LA PAGINA DE EDICION DEL PRODUCTO
  });

  },
  productDetail: (req, res) => {
    
    db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render('./products/productDetail',{product:product})
        });// RENDERIZA LA PAGINA DE EDICION DEL PRODUCTO // RENDERIZA LA PAGINA DETALLE DEL PRODUCTO

  },

  productCart: (req, res) => {

    res.render('./products/productCart'); // CONTROLADOR CARRITO DE COMPRAS

  },

  delete: function (req, res) {
    
        db.Products.destroy({where:{id:req.params.id}})
        .then(res.redirect('/'))

    },
  
  update: (req,res) => {

    db.Products.update(
      {
        "image": req.file.filename,
        "name": req.body.titulo,
        "description": req.body.descripcion,
        "price": req.body.precio,
        "in_sale": req.body.oferta,
        "category_id": req.body.categoria,
      },{
          where:{
              id:req.params.id
          }
      })
      .then(res.redirect('/'))// EDITA EL PRODUCTO POR SU ID
  }

};

module.exports = controllers;