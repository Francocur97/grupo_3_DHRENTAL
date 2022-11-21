const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const routersMain = require('./routers/mainRouters');
const routersUsers = require('./routers/usersRouters');
const routersProducts = require('./routers/productsRouters');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000')
});

app.use('/', routersMain);
app.use('/users', routersUsers);
app.use('/products', routersProducts);

app.get('*', (req, res) => {
    res.render('error404')
});