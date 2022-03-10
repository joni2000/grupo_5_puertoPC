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
        $termsError = qs('#termsError')

    let validationsErrors = false;

    $inputfirst_name.addEventListener('blur', () => {
        switch (true) {
            case !$inputfirst_name.value.trim():
                $first_nameError.innerHTML = 'El campo nombre es obligatorio';
                $inputfirst_name.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$inputfirst_name.value.length > 4:
                $first_nameError.innerHTML = 'El nombre debe tener mas de 2 caracteres';
                $inputfirst_name.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $inputfirst_name.classList.remove('is-invalid');
                $inputfirst_name.classList.add('is-valid');
                $first_nameError.innerHTML = '';
                break;
        }
    })

    $inputlast_name.addEventListener('blur', () => {
        switch (true) {
            case !$inputlast_name.value.trim():
                $inputlast_nameError.innerHTML = 'El campo apellido es obligatorio';
                $inputlast_name.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$inputlast_name.value.length > 4:
                $inputlast_nameError.innerHTML = 'Ingresa un apellido válido';
                $inputlast_name.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $inputlast_name.classList.remove('is-invalid');
                $inputlast_name.classList.add('is-valid');
                $last_nameError.innerHTML = '';
                break;
        }
    })

    $phone.addEventListener('blur', () => {
        switch (true) {
            case !$phone.value.trim():
                $phoneError.innerHTML = 'Debes ingresar tu teléfono ';
                $phone.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$phone.value.length > 4:
                $phoneError.innerHTML = 'Debes ingresar un número de teléfono válido';
                $phone.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $phone.classList.remove('is-invalid');
                $phone.classList.add('is-valid');
                $phoneError.innerHTML = '';
                break;
        }
    })

    $email.addEventListener('blur', () => {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = 'El campo email es obligatorio';
                $email.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$email.value.length > 4:
                $emailError.innerHTML = 'El email debe ser válido';
                $email.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $email.classList.remove('is-invalid');
                $email.classList.add('is-valid');
                $emailError.innerHTML = '';
                break;
        }
    })

    $password.addEventListener('blur', () => {
        switch (true) {
            case !$password.value.trim():
                $passwordError.innerHTML = 'El campo email es obligatorio';
                $password.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$password.value.length > 6:
                $passwordError.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres';
                $password.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $password.classList.remove('is-invalid');
                $password.classList.add('is-valid');
                $passwordError.innerHTML = '';
                break;
        }
    })

    $password2.addEventListener('blur', () => {
        switch (true) {
            case !$password2.value.trim():
                $password2Error.innerHTML = 'El campo email es obligatorio';
                $password2.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$password2.value.length > 4:
                $password2Error.innerHTML = 'El apellido debe tener ser válido';
                $password2.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $password2.classList.remove('is-invalid');
                $password2.classList.add('is-valid');
                $password2Error.innerHTML = '';
                break;
        }
    })

    $terms.addEventListener('blur', () => {
        switch (true) {
            case !$terms.value.trim():
                $termsError.innerHTML = 'Debes aceptar los términos y condiciones';
                $terms.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$terms.value.length > 4:
                $termsError.innerHTML = '';
                $terms.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $terms.classList.remove('is-invalid');
                $terms.classList.add('is-valid');
                $termsError.innerHTML = '';
                break;
        }
    })

    $form.addEventListener('submit', function (event) {
        event.preventDefault();

        let error = false;
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == ""
                //&& elementsForm[index].name !== 'nombre'
                //&& elementsForm[index].apellido !== 'apellido'
            ) {
                elementsForm[index].classList.add('is-invalid');
                submitError.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }
        if (!$terms.checked) {
            $terms.classList.add('is-invalid');
            $termsError.innerHTML = 'Debes aceptar los términos y condiciones';
            error = true;
        }

        if (!error && !validationsErrors) {
            $form.submit()
        }
    })

})