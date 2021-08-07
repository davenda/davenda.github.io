const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.post('/login', urlencodedParser, function (req, res){
    res.send('welcome, ' + req.body.username);
});

app.post('/api/users', jsonParser, function (req, res) {
    console.log("Hey Body");
})
// app.listen('3000', () =>{
//     console.log("Your server is running here");
// });
// app.use('/add', (req, res, next) => {
//     res.send('<h1>The "Add Product" page </h1>');
// })


