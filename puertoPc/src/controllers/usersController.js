var usersController = {

    login: (req, res )=> { 
        res.render('users/login',{
            title: "Iniciar Sesión"
        });
    },

    register: (req, res ) => {
        res.render('users/register',{
            title: "Registro"
        });
    },

};

module.exports = usersController;