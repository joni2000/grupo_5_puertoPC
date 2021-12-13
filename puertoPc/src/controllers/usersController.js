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