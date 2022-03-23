function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {

    let $inputfirst_name = qs('#first_name'),
        $first_nameError = qs('#first_nameError'),
        $inputlast_name = qs('#last_name'),
        $inputlast_nameError = qs('#last_nameError'),
        $phone = qs('#phone'),
        $phoneError = qs('#phoneError'),
        $email = qs('#email'),
        $emailError = qs('#emailError'),
        $password = qs('#password'),
        $passwordError = qs('#passwordError'),
        $password2 = qs('#password2'),
        $password2Error = qs('#password2Error'),
        $form = qs('#form_register')
    $submitError = qs('#submitError')
    $terms = qs('#terms'),
        $termsError = qs('#termsError'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPhone = /^[0-9]{10,12}$/,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    let validationsErrors = false;

    $inputfirst_name.addEventListener('blur', () => {
        switch (true) {
            case !$inputfirst_name.value.trim():
                $first_nameError.innerHTML = 'El campo nombre es obligatorio';
                validationsErrors = true
                break;
            case !regExAlpha.test($inputfirst_name.value):
                $first_nameError.innerHTML = 'Debe ingresar un nombre válido';
                validationsErrors = true;
                break;
            case !$inputfirst_name.value.length > 4:
                $first_nameError.innerHTML = 'El nombre debe tener mas de 2 caracteres';
                validationsErrors = true;
                break;
            default:
                $inputfirst_name.style.borderColor = 'green';
                $first_nameError.innerHTML = '';
                break;
        }
    })

    $inputlast_name.addEventListener('blur', () => {
        switch (true) {
            case !$inputlast_name.value.trim():
                $inputlast_nameError.innerHTML = 'El campo apellido es obligatorio';
                validationsErrors = true
                break;
            case !regExAlpha.test($inputlast_name.value):
                $inputlast_nameError.innerHTML = 'Debes ingresar un apellido válido';
                validationsErrors = true;
                break;
            case !$inputlast_name.value.length > 4:
                $inputlast_nameError.innerHTML = 'Ingresa un apellido válido';
                validationsErrors = true;
                break;
            default:
                $inputlast_name.style.borderColor = 'green';
                $inputlast_nameError.innerHTML = '';
                break;
        }
    })

    $phone.addEventListener('blur', () => {
        switch (true) {
            case !$phone.value.trim():
                $phoneError.innerHTML = 'Debes ingresar tu teléfono ';
                validationsErrors = true
                break;
            case !regExPhone.test($phone.value):
                $phoneError.innerHTML = 'Debes ingresar un télefono válido';
                validationsErrors = true
                break;
            case !$phone.value.length > 4:
                $phoneError.innerHTML = 'Debes ingresar un número de teléfono válido';
                validationsErrors = true;
                break;
            default:
                $phone.style.borderColor = 'green';
                $phoneError.innerHTML = '';
                break;
        }
    })

    $email.addEventListener('blur', () => {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = 'El campo email es obligatorio';
                validationsErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailError.innerHTML = 'El email debe ser válido';
                validationsErrors = true;
                break;
            default:
                $email.style.borderColor = 'green';
                $emailError.innerHTML = '';
                validationsErrors = false
                break;
        }
    })

    $password.addEventListener('blur', () => {
        switch (true) {
            case !$password.value.trim():
                $passwordError.innerHTML = 'El campo contraseña es obligatorio';
                validationsErrors = true
                break;
            case !regExPass.test($password.value):
                $passwordError.innerHTML = 'La contraseña debe tener 1 letra mayúscula, 1 minúscula y/o simbolo';
                validationsErrors = true;
                break;
            case !$password.value.length > 6:
                $passwordError.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres';
                validationsErrors = true;
                break;
            default:
                $password.style.borderColor = 'green';
                $passwordError.innerHTML = '';
                validationsErrors = false
                break;
        }
    })

    $password2.addEventListener('blur', () => {
        switch (true) {
            case !$password2.value.trim():
                $password2Error.innerHTML = 'Debes repetir la contraseña';
                validationsErrors = true
                break;
            case !$password2.value.length > 6:
                $password2Error.innerHTML = 'Las contraseñas no coinciden';
                $password2.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $password2.style.borderColor = 'green';
                $password2Error.innerHTML = '';
                validationsErrors = false
                break;
        }
    })

    $terms.addEventListener('blur', () => {
        switch (true) {
            case !$terms.value.trim():
                $termsError.innerHTML = 'Debes aceptar los términos y condiciones';
                validationsErrors = true
                break;
            case !$terms.value.length > 4:
                $termsError.innerHTML = '';
                validationsErrors = true;
                break;
            default:
                $termsError.innerHTML = '';
                break;
        }
    })

    $form.addEventListener('submit', function (event) {
        event.preventDefault();

        let error = false;
        let elementsForm = this.elements;
        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 3; index++) {
            if (elementsForm[index].value == ""
                //&& elementsForm[index].name !== 'nombre'
                //&& elementsForm[index].apellido !== 'apellido'
            ) {
                elementsForm[index].style.borderColor = 'red';
                submitError.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }
        if (!$terms.checked) {
            //$terms.classList.add('is-invalid');
            $termsError.innerHTML = 'Debes aceptar los términos y condiciones';
            error = true;
        }

        if (!error && !validationsErrors) {
            $form.submit()
        }
    })

})