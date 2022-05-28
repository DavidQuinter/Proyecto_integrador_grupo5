
const seguridadController = 
{
    login: (req, res) => 
    {
        res.render('login');        
    },
    register: (req, res) => 
    {
        res.render('register',{titulo:'Mundo Mascota DH-Register'});        
    }



}

module.exports = seguridadController;