let {getUsers, writeJson} = require("../data/dataBase")
let { validationResult } = require('express-validator');
const { redirect } = require("express/lib/response");
//const session = require("express-session");
const db = require('../data/models')
let bcrypt = require('bcryptjs')

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
                     firstName: user.firstN_name,
                     lastName: user.last_name,
                     email: user.email,
                     rol: user.rol
               }
               if (req.body.keepsession) {
                   const TIME_IN_MILISECONS = 600000000000000
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

            res.locals.user = req.session.user;
            res.redirect('/')

    },

    register: (req, res) => {
        res.render('users/register', {
            title: "Registro"
        });
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
        let lastId = 1;

        if(errors.isEmpty()){
            let { id, first_name, last_name, email, password, address, city, phone, rol, image, country, province } = req.body;
            
            db.User.create({
                id,
                first_name, 
                last_name, 
                email, 
                password: bcrypt.hashSync(password, 10), 
                address,
                city, 
                phone, 
                rol, 
                image, 
                country, 
                province,
                rol: 'ROL_USER',
                image: req.file ? req.file.filename: "default-image.png"
            })
            .then((user)=>{
                res.redirect('user/login');
            })

            getUsers.forEach(user => {
              if (user.id > lastId) {
                    lastId = user.id
                }
            });
            }else{
            res.render("users/register", {
                errors: errors.mapped(),
                session: req.session,
                old: req.body,
            })
            /* let newUser = {
                id: lastId + 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address,
                country: "",
                city: "",
                province: "",
                phone: "",
                ROL: "user",
                image: "img-default.jpg"
            };
            getUsers.push(newUser);
            writeJson(getUsers, "users");
            res.redirect("login"); */
        }
    },
    logout: (req, res) => {
          req.session.destroy();
          if(req.cookies.userPuertoPc){
              res.cookie('userPuertoPc', "", { maxAge: -1 })
          }  
        res.redirect('/')
    },
    profileUser: (req, res )=> { 
        let user = getUsers.find(user => user.id === +req.session.user.id)
        res.render('users/profileUser',{
            title: "Perfil de usuario",
            session: req.session,
            user
        })
    },
    editUser: (req, res) => {
        let user = getUsers.find(user => user.id === +req.session.user.id)
        res.render('users/editUser',{
            title: "Editar usuario",
            session: req.session,
            user
        })
    },
    updateUser: (req, res) => {
        let userId = +req.params.id;
            let {firstName, lastName, email, password, country, province, city, address, phone} = req.body
            getUsers.forEach(user => {
                if(user.id === userId){
                    user.id = user.id,
                    user.firstName,
                    user.lastName,
                    user.email,
                    user.password,
                    user.country = req.body.country,
                    user.province = req.body.province,
                    user.city = req.body.city,
                    user.address = req.body.address,
                    user.phone = req.body.phone,
                    user.image = req.file ? [req.file.filename] : user.image
                }
            })
                writeJson(getUsers, "users")
                res.redirect('/profileUser')
    }

}

module.exports = usersController;