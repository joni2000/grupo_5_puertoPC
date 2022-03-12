window.onload = () => {
    let $form = document.querySelector("#formEditUser");
    let $submitErrors = document.querySelector("submitErrors")
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

   /*  $form.addEventListener("submit", function(){ */
        /* e.preventDefault() *///para trabajar tranqui, después lo borro
    
    $inputCountry.addEventListener("change", (event) => {
        console.log(event.target.value)
    })
    
    $inputProvince.addEventListener("change", (event) => {
        console.log(event.target.value)
    })
    
    $inputCity.addEventListener("change", function() {
        switch(true){
            case !$inputCity.value.trim():
                $inputCityErrors.innerHTML = "Debes completar este campo"
                $inputCity.classList.add("#cityEditErrors")
                validationsErrors = true
                break;
            case !$regExAlpha.test($inputCity.value):
                $inputCityErrors.innerHTML = "Ingrese una ciudad válida"
                $inputCity.classList.add("#cityEditErrors")
                validationsErrors = true
                break;
            default:
                $inputCity.classList.remove("#cityEditErrors") 
                $inputCity.classList.add("#cityEditErrorsOk")             
        }   
    
    })

    $inputAddress.addEventListener("change", function() {
        switch(true){
            case !$inputAddress.value.trim():
                $inputAddressErrors.innerHTML = "Debes completar este campo"
                $inputAddress.classList.add("#AddressEditErrors")
                validationsErrors = true
                break;
            case !$regExAlphaNumeric.test($inputAddress.value):
                $inputAddressErrors.innerHTML = "Ingrese un domicilio válido"
                $inputAddress.classList.add("#AddressEditErrors")
                validationsErrors = true
                break;
            default:
                $inputAddress.classList.remove("#AddressEditErrors") 
                $inputAddress.classList.add("#AddressEditErrorsOk")             
        }   
    
    })

    /* $form.addEventListener("submit", function(event){
        event.preventDefault()
    
        let error = false;
        let elementsForm = this.elements;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if (elementsForm[i].value == ''
                && elementsForm[i].type !== 'file') {
                elementsForm[i].classList.add('#submitErrors');
                $submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true
            }
        }

        if (!error && !validationsErrors) {
            $form.submit()
        }
    
    }); */

    





















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

}) */}