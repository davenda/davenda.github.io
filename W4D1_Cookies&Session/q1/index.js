const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.render('index', {
        'cookies': req.cookies
    });
});

app.post('/', (req, res) =>{
    let key = req.body.key;
    let value = req.body.value;
    res.cookie(key, value);
    // console.log(req.cookies);
    res.redirect('back');
})

// app.get('/forget', (req, res) =>{
//     for(item in req.cookies){
//         res.clearCookie(req.cookies[item]);
//     }
//     res.redirect('back');
// })

app.listen(3000);