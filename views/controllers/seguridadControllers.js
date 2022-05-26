
const seguridadController = 
{
    login: (req, res) => 
    {
        res.render('login');        
    },

    recuperar: (req, res) => 
    {
        res.render('recuperar');        
    },
    
    register: (req, res) => 
    {
        res.render('register');        
    }



}

module.exports = seguridadController;