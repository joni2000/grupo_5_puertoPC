function isUser(req, res, next){
    if(log){
        next()
    }else{
        res.status().redirect('/users/login')
    }
}