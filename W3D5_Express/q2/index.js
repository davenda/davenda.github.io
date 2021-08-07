const express = require('express');
const path = require('path');
const app = express();
app.use('/result', express.urlencoded({extended: false}));
app.get('/', (req, res) =>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'result.html'));
})
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} your age is ${age}.`);
})

app.listen(3000);