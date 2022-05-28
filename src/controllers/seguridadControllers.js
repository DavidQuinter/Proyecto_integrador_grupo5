
const seguridadController = 
{
    login: (req, res) => 
    {
        res.render('login');        
    },
    register: (req, res) => 
    {
        res.render('register');        
    },
    admin: (req, res) => 
    {
        res.render('admin');        
    },



}

module.exports = seguridadController;