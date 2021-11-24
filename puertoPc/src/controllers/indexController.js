let controller = { //object
   index:  function(req, res, next) {//function
    res.render('index', { title: 'Express' });//method
  } 
  
}

module.exports = controller