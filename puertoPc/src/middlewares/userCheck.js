function isUser(req, res, next){
    if(req.session.user){
        next()
    }else{
        res.status().redirect('/login')
    }
}

module.exports = isUser;