let {getUsers, writeJson} = require("../data/dataBase")
let { validationResult } = require('express-validator');
//const session = require("express-session");

var usersController = {

    login: (req, res )=> { 
        res.render('users/login',{
            title: "Iniciar Sesión",
            session: req.session
        })

    },
         processLogin: (req, res) => {
            let errors = validationResult(req);

            if (errors.isEmpty()) {
                let user = getUsers.find(user => user.email === req.body.email);

               req.session.user = {
                     id: user.id,
                     firstName: user.firstName,
                     lastName: user.lastName,
                     email: user.email,
                     rol: user.rol
               }
               if (req.body.keepsession) {
                   const TIME_IN_MILISECONS = 60000
                   res.cookie("userPuertoPc", req.session.user, {
                       expires: new Date(Date.now() + TIME_IN_MILISECONS),
                       httpOnly: true,
                       secure: true
                   })
                }

                  res.locals.user = req.session.user;
                  res.redirect('/')

            }else{
                res.render('users/login', {
                    title: "Iniciar Sesión",
                    errors: errors.mapped(),
                    session: req.session
                    
                })
            }

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

    logout: (req, res) => {
          req.session.destroy();
          if(req.cookies.userPuertoPc){
              res.cookie('userPuertoPc', "", { maxAge: -1 })
          }  
        res.redirect('/')
    },

}

module.exports = usersController;