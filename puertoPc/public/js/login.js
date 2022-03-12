window.onload = () =>{
    let $formLogin = document.getElementById('formLogin');
    let $emailLogin = document.querySelector('#email');
    let $emailErrorlogin = document.querySelector('#emailErrorLogin');
    
    let $passLogin = document.querySelector('#pass');
    let $passErrorlogin = document.querySelector('#passErrorLogin');
    let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExPass =/^[a-z0-9_-]{6,12}$/ ;
    
    let errors = {};
    $emailLogin.addEventListener('blur', (event)=>{
       let value = event.target.value;
       let errorMsg ;
       switch(true){
           case !value.trim ():
               errorMsg = 'El campo email es requerido'
               errors.inputEmailError = errorMsg;
               $emailErrorlogin.classList.add('error-message');
               $emailErrorlogin.innerHTML = errorMsg
               break;
               
          case !regExEmail.test(value):
              errorMsg = 'Email inválido'
              errors.inputEmailError = errorMsg;
              $emailErrorlogin.classList.add('error-message');
              $emailErrorlogin.innerHTML = errorMsg
              break;
        default:
            $emailErrorlogin.innerHTML = "";
            $emailErrorlogin.classList.remove('error-message')

       }
         
    })
    $passLogin.addEventListener('blur', (event)=>{
       let value = event.target.value;
       let errorMsg ;
       switch(true){
           case !value.trim ():
               errorMsg = 'El campo contraseña es requerido'
               errors.inputEmailError = errorMsg;
               $passErrorlogin.classList.add('error-message');
               $passErrorlogin.innerHTML = errorMsg
               break;
               
          case !regExPass.test(value):
              errorMsg = 'La contraseña debe tener entre 6 y 12 caracteres'
              errors.inputEmailError = errorMsg;
              $passErrorlogin.classList.add('error-message');
              $passErrorlogin.innerHTML = errorMsg
              break;
        default:
            $passErrorlogin.innerHTML = "";
            $passErrorlogin.classList.remove('error-message')

       }
         
    })
    $formLogin.addEventListener('submit', (e)=>{
        /* e.preventDefault(); */
        let error = false;
        let elementsForm = $formLogin.elemments;
        
       /*  for (let index = 0) */
          
     })
    
   
}