
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
        res.render('promociones');        
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
}


module.exports = ventaController;