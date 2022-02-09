let {getUsers, writeJson} = require("../data/dataBase")
let { validationResult } = require('express-validator');
const { redirect } = require("express/lib/response");
//const session = require("express-session");
const db = require('../data/models')

const Users = db.User;


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
            let { id, firstName, lastName, email, password, address, city, phone, rol, image, country, province } = req.body;
            
            Users.create({
                id,
                firstName, 
                lastName, 
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

            Users.forEach(user => {
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

        Users.findByPk(req.params.id)
        .then((user) =>
        res.render('users/profileUser', {
            title: "Perfil de Usuario",
            session: req.session,
            user
        })
        .catch(error => res.send(error))

/*         let user = getUsers.find(user => user.id === +req.session.user.id)
        res.render('users/profileUser',{
            title: "Perfil de usuario",
            session: req.session,
            user
        }) */
        )},
    editUser: (req, res) => {

        Users.findAll()
            .then(users => {
                    res.render('users/editUser', {
                    title: "Edición de usuario",
                    users,
                    session: req.session,

                });
            }).catch(error => console.log(error))
        
        /* let user = getUsers.find(user => user.id === +req.session.user.id)
        res.render('users/editUser',{
            title: "Editar usuario",
            session: req.session,
            user
        }) */
    },
    updateUser: (req, res) => {

        const { id, first_name, last_name, email, password, address, city, phone, rol, image, country, province } = req.body;
        
        Users.update({
            id,
                first_name, 
                last_name, 
                email, 
                password, 
                address,
                city, 
                phone, 
                rol, 
                image, 
                country, 
                province,
                rol: 'ROL_USER',
                image: req.file ? req.file.filename: "default-image.png"
        }, {
            where: {
                id: req.params.id,
            }
        })
        .then(result => {
            Users.update({
                where: {
                    id: req.params.id
                }
            })
            .then(res.redirect('/profileUser'))
            .catch(error => console.log(error))
        })
        
        

        /* let userId = +req.params.id;
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
                res.redirect('/profileUser') */
    }

}

module.exports = usersController;