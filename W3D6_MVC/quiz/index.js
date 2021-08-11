const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(session({
    secret: 'salt for cookie signing'
}));
app.use((req, res, next) => {
    if(!req.session.views){
        req.session.views = [];
    }
    next();
});
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let list = req.session.views;
    res.render('index', {list: list});
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    req.session.views.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);