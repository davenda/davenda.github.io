const express = require('express');
const router  = require('./router');
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(session({
    secret: 'hello from the sky',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.use(express.urlencoded({extended:false}));

app.use('/products', router);

app.listen(3000);