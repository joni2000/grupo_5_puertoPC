let {users} = require("../data/dataBase")

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
    },/* 
         createUser: (req, res) => {
        res.render("/register/newUser");
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        };
        getUsers.push(newUser);
        writeJson(getUser)
        res.redirect("/")
    },  */

}

module.exports = usersController;