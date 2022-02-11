function menuOn(){
    document.getElementById("boxMenuLi").style.display = 'block';
  }
  function menuOff(){
    document.getElementById("boxMenuLi").style.display = 'none';
  }

  function menuMobile() {
    let boxMenu = document.getElementById("boxMenuLi");
    if (boxMenu.style.display === "none"){
      menuOn();
    }else{
      menuOff();
    }
  }

  function userOn(){
    document.getElementById("boxMenuUsers").style.display = 'block';
  }
  function userOff(){
    document.getElementById("boxMenuUsers").style.display = 'none';
  }
 
  function menuUsers() {
    let boxUser = document.getElementById("boxMenuUsers");
    if (boxUser.style.display === "none"){
      userOn();
    }else{
      userOff();
    }
  }