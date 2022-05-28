
const ventaController = 
{
    index: (req, res) => 
    {
        res.render('mascotas');        
    },

    marcas: (req, res) => 
    {
        res.render('marcas');        
    },
    promociones: (req, res) => 
    {
        res.render('promociones',{titulo:'Mundo Mascota DH-Promociones'});        
    },
    productCart: (req, res) => 
    {
        res.render('productCart');        
    },
    productDetail: (req, res) => 
    {
        res.render('productDetail');        
    },
    sucursales: (req, res) => 
    {
        res.render('sucursales');        
    },
    mascotas: (req, res) => 
    {
        res.render('mascotas');        
    },
}


module.exports = ventaController;