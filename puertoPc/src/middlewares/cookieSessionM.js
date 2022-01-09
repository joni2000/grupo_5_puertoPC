function cookieSession (req, res, next) {
      if (req.cookies.userPuertoPc) {
          req.session.user = req.cookies.userPuertoPc;
          res.locals.user = req.session.user
       }
       next() 
  }

module.exports = cookieSession