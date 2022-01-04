let {getUsers, writeJson} = require("../data/dataBase")
let { validationResult } = require('express-validator')

var usersController = {

    login: (req, res )=> { 
        res.render('users/login',{
            title: "Iniciar Sesión"
        });

    },
         processLogin: (req, res) => {
            let errors = validationResult(req);
            if (errors.isEmpty()){
                res.send('')

            }else{
                res.render('users/login', {
                    title: "Iniciar Sesión",
                    errors: errors.mapped()
                });

            }
            res.send(errors)

        },

    register: (req, res ) => {
        res.render('users/register',{
            title: "Registro"
        });
    },
         createUser: (req, res) => {
        

        let lastId = 1;

        getUsers.forEach(user => {
            
            if(user.id > lastId){
                lastId = user.id
            }
        });     
        let newUser = {
            id: lastId + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            category: "user",
            image: "img-default.jpg"
        };
        getUsers.push(newUser);
        writeJson(getUsers, "users");
        res.redirect("/")
    }, 

}

module.exports = usersController;