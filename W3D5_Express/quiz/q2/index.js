const express = require('express');
const path = require('path');
const app = express();
let arr = ['hey', 'hello'];
app.use('/add', express.urlencoded({extended: false}));
app.get('/', (req, res) =>{
    let response = "<ul>";
    for(let i = 0; i < arr.length; i++){
        response += `<li> ${arr[i]} </li>`;
    }
    response += "</ul><a href='/add'>Add</a>";
    res.send(response);
})
app.get('/add', (req, res) =>{
    let response =
        "<body>"+
            "Enter Text <input type='text' name='text'>"+
            "<input type='submit' value='submit query'>"+
        "</body>";
    res.send(response);
})
app.post('/add', (req, res) => {
    let text = req.body.text;
    console.log(req.body);
    arr.push(text);
    res.redirect(300, '/');
})

app.listen(3000);