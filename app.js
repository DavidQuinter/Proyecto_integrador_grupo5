//Servidor.
const express = require('express');
const path= require('path');

const app = express();

app.use(express.static("public"));


app.listen(3030,() => {
    console.log("Servidor corriendo en http://localhost:3030");
});


app.get('/',function(req,res)
{
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
});

app.get('/carrito', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/productCart.html');
    res.sendFile(htmlPath);
})

app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
})

app.get('/register', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
})
app.get('/home', (req,res)=>{
    let htmlPath =path.resolve(__dirame, './views/index,html')
    res.sendFile(htmlPath)
})