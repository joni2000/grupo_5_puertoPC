window.onload = () => {
    let $form = document.querySelector("#formEditUser");
    let $submitErrors = document.querySelector("#submitErrors")
    let $inputCountry = document.querySelector("#countryEdit");
    let $inputCountryErrors = document.querySelector("#countryEditErrors");
    let $inputProvince = document.querySelector("#provinceEdit")
    let $inputProvinceErrors = document.querySelector("#provinceEditErrors")
    let $inputCity = document.querySelector("#cityEdit")
    let $inputCityErrors = document.querySelector("#cityEditErrors")
    let $inputAddress = document.querySelector("#addressEdit")
    let $inputAddressErrors = document.querySelector("#addressEditErrors")

    let $regExAlpha = /^[a-zA-Z\s]+$/
    let $regExAlphaNumeric = /^[\w/.%+\s]+$/
    
    

    let validationsErrors = false;
    
    
    $inputCountry.addEventListener("focus", () => {
        switch(true){
            case !$inputCountry.value.trim():
                $inputCountryErrors.innerHTML = "Campo obligatorio"
                $inputCountry.classList.add("#countryEditErrors")
                validationsErrors = true
                break;
            
            default:
                $inputCityErrors.innerHTML = "";

                $inputCountry.classList.add("#countryEditErrors")             
        }
    })
    
    $inputProvince.addEventListener("change", (event) => {
        console.log(event.target.value)
    })
    
            //onFocus

    $inputProvince.addEventListener("focus", function() {
        switch(true){
            case !$inputProvince.value.trim():
                $inputProvinceErrors.innerHTML = "Campo obligatorio"
                $inputProvince.classList.add("#provinceEditErrors")
                validationsErrors = true
                break;
            
            default:
                $inputProvinceErrors.innerHTML = "";

                $inputProvince.classList.add("#provinceEditErrors")             
        }
    
    })    

    $inputAddress.addEventListener("focus", function() {
         
    
    })    

            //onFocus

            $inputCity.addEventListener(("focus"), function() {
                
                switch(true){
                    case !$inputCity.value.trim():
                        $inputCityErrors.innerHTML = "Campo obligatorio"
                        $inputCity.classList.add("#cityEditErrors")
                        validationsErrors = true
                        break;
                    
                    default:
                        $inputCityErrors.innerHTML = "";

                        $inputCity.classList.add("#cityEditErrorsOk")             
                }   

            }) 
        

            //onBlur
            $inputCity.addEventListener(("blur"), function() {
                switch(true){
                    case !$inputCity.value.trim():
                        $inputCityErrors.innerHTML = "Campo obligatorio"
                        $inputCity.classList.add("#cityEditErrors")
                        validationsErrors = true
                        break;
                    case !$regExAlpha.test($inputCity.value):
                        $inputCityErrors.innerHTML = "No debe contener símbolos, acéntos, puntos ni números"
                        $inputCity.classList.add("#cityEditErrors")
                        validationsErrors = true
                        break;
                    default:
                        $inputCityErrors.innerHTML = "";

                        $inputCity.classList.add("valid")             
                }   
            
            })
            //onChange

    $inputCity.addEventListener(("change"), function() {
         
    
    })
            //Adress

    $inputAddress.addEventListener(("focus"), function() {


        switch(true){
            case !$inputAddress.value.trim():
                $inputAddressErrors.innerHTML = "Campo obligatorio"
                $inputAddress.classList.add("#AddressEditErrors")
                validationsErrors = true
                break;
            case !$regExAlphaNumeric.test($inputAddress.value):
                $inputAddressErrors.innerHTML = "Ingrese un domicilio válido"
                $inputAddress.classList.add("#AddressEditErrors")
                validationsErrors = true
                break;
            default:
                $inputAddressErrors.innerHTML = "";
                $inputAddress.classList.remove("#AddressEditErrors") 
                          
        }   
    
    })

    $form.addEventListener("submit", function(event){
        event.preventDefault()
    
        let error = false;
        let elementsForm = this.elements;

        for (let i = 0; i < elementsForm.length-1 ; i++){
            if (elementsForm[i].value == ""){
                $submitErrors.innerHTML = "*campos obligatorios"
                elementsForm[i].classList.add('#submitErrors')
                error = true
                
            }
            if (!error && !validationsErrors) {
                $form.submit()
            }
        }
    });
    










    

    





















/* window.addEventListener("load", function(){
    let formEditUser = document.querySelector("form.reservation")

    formEditUser.addEventListener("submit", (event) => {
        event.preventDefault();
        let campoddress = formEditUser.querySelector("input.address");
        if(address.value == ""){
            
            errors.push("campo obligatorio");
        }
        if(errors.length > 0){
            event.preventDefault()
        }
    })

}) */

}