
const express = require('express');
const app = express();
const path = require ('path');
const routersMain = require('./routers/mainRouters');
const routersUsers = require('./routers/usersRouters');
const routersProducts = require('./routers/productsRouters');

app.set('views', path.resolve(__dirname, 'views')); 
app.set('view engine','ejs');

app.use(express.static('public'));                  

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000')
});

app.use('/',routersMain);
app.use('/',routersUsers);
app.use('/',routersProducts);

app.get('*',(req,res)=>{
    res.render('error404')
});                         

