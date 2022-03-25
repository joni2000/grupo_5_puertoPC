window.onload = () =>{
    let $formLogin = document.querySelector('#formLogin');
    let $emailLogin = document.querySelector('#email');
    let $emailErrorlogin = document.querySelector('#emailErrorLogin');
    
    let $passLogin = document.querySelector('#pass');
    let $passErrorlogin = document.querySelector('#passErrorLogin');
    let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
  // let  regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    let $submitErrorLogin = document.querySelector('#submitErrorLoginmsj');

    let validationsErrorsLogin = false;

    $emailLogin.addEventListener('blur', (event)=>{
       let value = event.target.value;

       switch(true){
        
           case !$emailLogin.value.trim ():
               $emailErrorlogin.innerHTML = 'El campo email es requerido';
               $emailLogin.classList.add('error-message');
               $emailLogin.classList.add('errorBorderLogin');//errorBorderLoginOk
               validationsErrorsLogin = true
               break;
               
          case !regExEmail.test($emailLogin.value):
              $emailErrorlogin.innerHTML = 'Email inválido';
              $emailLogin.classList.add('error-message');
              $emailLogin.classList.add('errorBorderLogin')
               validationsErrorsLogin = true
              break;
        default:
            $emailErrorlogin.classList.remove('error-message');
            $emailLogin.classList.remove('errorBorderLogin')
            $emailLogin.classList.add('errorBorderLoginOk')
            $emailErrorlogin.innerHTML = ""
            $submitErrorLogin.innerHTML =''
            validationsErrorsLogin = false
            break;
       }
         
    })
   $passLogin.addEventListener('blur', (event)=>{
       let value = event.target.value;
       switch(true){
           case !$passLogin.value.trim ():
                $passErrorlogin.innerHTML = 'El campo contraseña es requerido';
                $passErrorlogin.classList.add('error-message');
                $passLogin.classList.add('errorBorderLogin');
                validationsErrorsLogin = true
               break;
               
          case !regExPass.test(value):
              $passErrorlogin.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres';
              $passErrorlogin.classList.add('error-message');
              validationsErrorsLogin = true
              break;
        default:
            $passErrorlogin.innerHTML = "";
            $passErrorlogin.classList.remove('error-message')
            $passLogin.classList.remove('errorBorderLogin')
            validationsErrorsLogin = false
            break;

       }
         
    })
      $formLogin.addEventListener('submit', function(e){
            e.preventDefault();
            
            let errorLogin = false;
            let elementsFormLogin = this.elements;
           
             for (let index = 0; index < elementsFormLogin.length - 6; index++){
             if (elementsFormLogin[index].value == "" ){  
                $submitErrorLogin.innerHTML ='Completa todos los campos'
                elementsFormLogin[index].classList.add('error-message')
                $submitErrorLogin.classList.add('#submitErrorLoginmsj')
                $emailLogin.classList.add('errorBorderLogin');//errorBorderLoginOk
                errorLogin = true;
                }
        }
         if(!errorLogin && !validationsErrorsLogin){
            $formLogin.submit()
        } 
         
    })  
      
}