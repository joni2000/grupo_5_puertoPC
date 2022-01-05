function authMiddleware(req, res, next) {
    if (req.session.userLogged == undefined) {
        next();
    } else {
        res.send('');
    }

}

module.exports = authMiddleware;