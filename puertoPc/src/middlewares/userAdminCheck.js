module.exports = (req, res, next) => {
    if (req.session.user !== undefined && req.session.user.rol == 'rol_admin') {
        next()
    } else {
        res.redirect('/')
    }
}