var controller = {

  index: (req, res )=> {    
    res.render('index',{
    title: "Puerto PC"
    });
  },
  
};

module.exports = controller 