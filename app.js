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
    res.send("Estamos en pagina de inicio");
});

app.get('/carrito', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/productCart.html');
    res.sendFile(htmlPath);
})