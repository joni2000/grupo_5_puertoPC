window.onload = () =>{
    let $formLogin = document.querySelector('#formLogin');
    let $emailLogin = document.querySelector('#email');
    let $emailErrorlogin = document.querySelector('#emailErrorLogin');
    
    let $passLogin = document.querySelector('#pass');
    let $passErrorlogin = document.querySelector('#passErrorLogin');
    let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExPass =/^[a-z0-9_-]{6,12}$/ ;
    let $submitErrorLogin = document.querySelector('error-messageLoginForm');

    let validationsErrorsLogin = false;

    $emailLogin.addEventListener('blur', (event)=>{
         let value = event.target.value;
       switch(true){
        
           case !$emailLogin.value.trim ():
               $emailErrorlogin.innerHTML = 'El campo email es requerido';
               $emailLogin.classList.add('error-message');
               validationsErrorsLogin = true
               break;
               
          case !regExEmail.test(value):
              $emailErrorlogin.innerHTML = 'Email inválido';
              $emailLogin.classList.add('error-message');
               validationsErrorsLogin = true
              break;
        default:
            $emailErrorlogin.innerHTML = "";
            $emailErrorlogin.classList.remove('error-message')
            break;
       }
         
    })
   $passLogin.addEventListener('blur', (event)=>{
       let value = event.target.value;
       switch(true){
           case !$passLogin.value.trim ():
                $passErrorlogin.innerHTML = 'El campo contraseña es requerido';
                $passErrorlogin.classList.add('error-message');
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
            break;

       }
         
    })
    $formLogin.addEventListener('submit', function(e){
           /*   e.preventDefault();
            let errorLogin = false;
            let elementsFormLogin = this.elements;
           
             for (let index = 0; index < elementsFormLogin.length - 1; index++){
             if (elementsForm[index].value == "" ){  
                $submitErrorLogin.innerHTML ='Completa todos los campos'; 
                $submitErrorLogin.classList.add('error-messageLoginForm'); 
                errorLogin = true; 
                validationsErrorsLogin = true
                break;
             default:
                    $passErrorlogin.innerHTML = "";
                    $passErrorlogin.classList.remove('error-message')
                    break;
               } 
        }
        if(!errorLogin && !validationsErrorsLogin){
            $formLogin.submit()
        } 
 */
         
    }) 
      
}