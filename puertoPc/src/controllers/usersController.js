let {getUsers, writeJson} = require("../data/dataBase")

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
         createUser: (req, res) => {
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        };
        getUsers.push(newUser);
        writeJson(getUsers)
        res.redirect("/")
    }, 

}

module.exports = usersController;