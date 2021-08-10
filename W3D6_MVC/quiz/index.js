const express = require('express');
const app = express();
const path = require('path');

let list = ['hello','hey'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {list: list})
});

app.get('/add', (req, res) => {
    res.render('add')
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);