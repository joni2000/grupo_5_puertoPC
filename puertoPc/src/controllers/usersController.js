let { getUsers, writeJson } = require("../data/dataBase")
let { validationResult } = require('express-validator')

var usersController = {

    login: (req, res) => {
        res.render('users/login', {
            title: "Iniciar Sesión"
        });

    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = users.find(user => user.email == req.body.email);

            req.session.user = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                rol: user.rol
            }

            res.locals.user = req.session.user;
            res.redirect('/')

        } else {
            res.render('users/login', {
                title: "Iniciar Sesión",
                errors: errors.mapped()

            });
        }

    },

    register: (req, res) => {
        res.render('users/register', {
            title: "Registro"
        });
    },
    createUser: (req, res) => {


        let lastId = 1;

        getUsers.forEach(user => {

            if (user.id > lastId) {
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
    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
/*             let user = users.find(user => user.email == req.body.email);

            req.session.user = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                rol: user.rol
            }

            res.locals.user = req.session.user;
            res.redirect('/') */

        } else {
            res.render('users/register', {
                title: "Registrarse",
                errors: errors.mapped()

            });
        }

    },
    profileUser: (req, res) => {
        res.render("users/profileUser", {
            title: "Perfil de Usuario"
        })
    }
}

module.exports = usersController;