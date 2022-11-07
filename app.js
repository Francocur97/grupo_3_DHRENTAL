const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000')
});

app.get('/',(req,res) => {
    res.sendFile(path.resolve('./views/index.html'))
});

app.get('/login',(req,res) => {
    res.sendFile(path.resolve('./views/login.html'))
});

app.get('/register',(req,res) => {
    res.sendFile(path.resolve('./views/register.html'))
});

app.get('/productCart',(req,res) => {
    res.sendFile(path.resolve('./views/productCart.html'))
});

app.get('/productDetail',(req,res) => {
    res.sendFile(path.resolve('./views/productDetail.html'))
});

app.get('/nosotros',(req,res) => {
    res.sendFile(path.resolve('./views/nosotros.html'))
});

app.get('/contacto',(req,res) => {
    res.sendFile(path.resolve('./views/contacto.html'))
});

app.get('*',(req,res) => {
    res.sendFile(path.resolve('./views/error404.html'))
});