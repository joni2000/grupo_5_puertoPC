//let {getUsers, writeJson} = require("../data/dataBase")
let { validationResult } = require('express-validator');
/* const { redirect } = require("express/lib/response"); */
//const session = require("express-session");
const db = require('../data/models')
let bcrypt = require('bcryptjs')
const fetch = require("node-fetch");


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

                if(errors.isEmpty()){
                    Users.findOne({
                        where: {
                            email: req.body.email
                        }
                    })
                    .then(user => {
                        req.session.user = {
                            id: user.id,
                            firstName: user.first_name,
                            lastName: user.last_name,
                            email: user.email,
                            rol: user.rol
                        }
            
                       if(req.body.keepsession){
                           const TIME_IN_MILISECONDS = 60000000
                           res.cookie("userPuertoPc", req.session.user, {
                               expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                               httpOnly: true,
                               secure: true
                           })
                       }else{
                           
                        const TIME_IN_MILISECONDS = 60000000
                        res.cookie("userPuertoPc", req.session.user, {
                            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                            httpOnly: true,
                            secure: true
                        })
                        res.locals.user = req.session.user;
            
                        res.redirect('/')
                       }
                       
            
                        res.locals.user = req.session.user;
            
                        res.redirect('/')
                    })
                }else{
                    res.render('users/login', {
                        title: "Iniciar Sesión",
                        errors: errors.mapped(),
                        session: req.session
                        
                    })
                }
            },

    register: (req, res) => {
        res.render('users/register', {
            title: "Registro"
        });
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
       
        if(errors.isEmpty()){
            let { first_name, last_name, email, password, phone } = req.body;
            Users.create({
                first_name, 
                last_name,
                email,
                password: bcrypt.hashSync(password, 10),
                phone,
                city: "",  
                country: "", 
                province: "",
                rol: 'rol_user',
                image: req.file ? req.file.filename : 'default-image.png',
            })
            .then(() => {
                res.redirect('/login')
            })
        }else{
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
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
        ).catch(error => res.send(error)
        )},

    editUser: async (req, res) => {
        let provinces = await fetch("https://apis.datos.gob.ar/georef/api/provincias").then(response => response.json())
        let provincias = provinces.provincias
        Users.findByPk(req.params.id)
            .then(user => {
                    res.render('users/editUser', {
                    title: "Edición de usuario",
                    provincias,
                    user,
                    session: req.session,
                    old: req.body,
                });
            }).catch(error => console.log(error))
    },

    updateUser: async (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
        const { image, address, city, country, province,} = req.body;
        
        Users.update({
                image: req.file ? req.file.filename : 'default-image.png',
                address,
                city, 
                country, 
                province,  
        }, {
            where: {
                id: req.params.id,
            }
        }).then(() => {
            res.redirect(`/profileUser/${req.params.id}`)
        }).catch(error => console.log(error))
        }else{
            let provinces = await fetch("https://apis.datos.gob.ar/georef/api/provincias").then(response => response.json())
            let provincias = provinces.provincias
            Users.findByPk(req.params.id)
            .then(user => {
                    res.render('users/editUser', {
                    errors: errors.mapped(),
                    title: "Edición de usuario",
                    provincias,
                    user,
                    session: req.session,
                    old: req.body,
                });
            }).catch(error => console.log(error))
        }
    
    },

    admin: (req, res) => {
        Users.update({
            rol: 'rol_admin'
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect('/admin/usuarios'))
        .catch(error => console.log(error))
    },

    delete: (req, res) => {
        Users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect('/admin/users'))
        .catch(error => console.log(error))
    }
    
}      

module.exports = usersController;