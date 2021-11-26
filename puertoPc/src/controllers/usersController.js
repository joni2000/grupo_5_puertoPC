var usersController = {

    login: (req, res )=> { 
        res.render('login');
    },

    register: (req, res )=> {
        res.render('register');
    },

    register: (req, res )=> {
        res.render('admin');
    },
};

module.exports = usersController;