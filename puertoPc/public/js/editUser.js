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

    let $regExAlpha = /^(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/
    let $regExAlphaNumeric = /^[\w/.%+\s]+$/
    
    

    let validationsErrors = false;
    

    //COUNTRY
    
    $inputCountry.addEventListener(("focus", "change", "blur"), () => {
        switch(true){
            case !$inputCountry.value.trim():
                $inputCountryErrors.innerHTML = "Campo obligatorio"
                $inputCountry.classList.remove('error_borde_ok');
                $inputCountry.classList.add('error_borde');
                $inputCountry.classList.add("#countryEditErrors")
                validationsErrors = true
                break;
            
            default:
                $inputCountry.classList.add("#countryEditErrors")  
                $inputCountry.classList.remove('error_borde');
                $inputCountry.classList.add('error_borde_ok');
                $inputCountryErrors.innerHTML = "";
                validationsErrors = false
        }
    })
    
            //PROVINCE

    $inputProvince.addEventListener(("focus", "change", "blur"), function() {
        switch(true){
            case !$inputProvince.value.trim():
                $inputProvinceErrors.innerHTML = "Campo obligatorio"
                $inputProvince.classList.remove('error_borde_ok');
                $inputProvince.classList.add('error_borde');
                $inputProvince.classList.add("#provinceEditErrors")
                validationsErrors = true
                break;
            
            default:
                $inputProvince.classList.remove("#provinceEditErrors");
                $inputProvince.classList.remove('error_borde');
                $inputProvince.classList.add('error_borde_ok');



                $inputProvinceErrors.innerHTML = "";
                validationsErrors = false

        }
    
    })    

            //CITY

            $inputCity.addEventListener(("focus", "change", "blur"), function() {
                
                switch(true){
                    case !$inputCity.value.trim():
                        $inputCityErrors.innerHTML = "Campo obligatorio"
                        $inputCity.classList.remove('error_borde_ok');
                        $inputCity.classList.add('error_borde');
                        $inputCity.classList.add("#cityEditErrors")
                        validationsErrors = true
                        break;
                    case !$regExAlpha.test($inputCity.value):
                        $inputCityErrors.innerHTML = "No debe contener símbolos, puntos ni números"
                        $inputCity.classList.remove('error_borde_ok');   
                        $inputCity.classList.add('error_borde');
                        $inputCity.classList.add("#cityEditErrors")
                        validationsErrors = true
                        break;
                    default:
                        $inputCity.classList.remove("#cityEditErrors") 
                        $inputCity.classList.remove('error_borde');   
                        $inputCity.classList.add('error_borde_ok');   
                        $inputCityErrors.innerHTML = "";
                        validationsErrors = false
                }   

            }) 
        
            //ADDRESS

    $inputAddress.addEventListener(("focus", "change", "blur"), function() {


        switch(true){
            case !$inputAddress.value.trim():
                $inputAddressErrors.innerHTML = "Campo obligatorio"
                $inputAddress.classList.remove('error_borde_ok');   
                $inputAddress.classList.add('error_borde');
                $inputAddress.classList.add("#addressEditErrors")
                validationsErrors = true
                break;
            case !$regExAlphaNumeric.test($inputAddress.value):
                $inputAddressErrors.innerHTML = "Ingrese un domicilio válido"
                $inputAddress.classList.remove('error_borde_ok');   
                $inputAddress.classList.add('error_borde');
                $inputAddress.classList.add("#addressEditErrors")
                validationsErrors = true
                break;
            default:
                $inputAddress.classList.remove("#addressEditErrors"); 
                $inputAddress.classList.remove('error_borde');
                $inputAddress.classList.add('error_borde_ok');
                $inputAddressErrors.innerHTML = "";
                validationsErrors = false;
        }   
    
    })

    $form.addEventListener("submit", function(event){
        
    
        let error = false;
        let elementsForm = this.elements;

        
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