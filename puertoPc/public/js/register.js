function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {

    let $inputfirst_name = qs('#first_name'),
        $first_nameErrors = qs('#first_nameErrors'),
        $inputlast_name = qs('#last_name'),
        $last_nameErrors = qs('#last_nameErrors'),
        $phone = qs('#phone'),
        $phoneErrors = qs('#phoneErrors'),
        $email = qs('#email'),
        $emailErrors = qs('emailErrors'),
        $password = qs('#pasword'),
        $passwordErrors = qs('#passwordErrors'),
        $password2 = qs('#password2'),
        $password2Errors = qs('#password2Errors'),
        $terms = qs('#terms'),
        $termsErrors = qs('#termsErrors')

    let validationsErrors = false;

    $inputfirst_name.addEventListener('blur', () => {
        switch (true) {
            case !$inputfirst_name.value.trim():
                $first_nameErrors.innerHTML = 'El campo nombre es obligatorio';
                $inputfirst_name.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$inputfirst_name.value.length > 4:
                $first_nameErrors.innerHTML = 'El nombre debe tener mas de 2 caracteres';
                $inputfirst_name.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $inputfirst_name.classList.remove('is-invalid');
                $inputfirst_name.classList.add('is-valid');
                $first_nameErrors.innerHTML = '';
                break;
        }
    })

    $inputlast_name.addEventListener('blur', () => {
        switch (true) {
            case !$inputlast_name.value.trim():
                $last_nameErrors.innerHTML = 'El campo apellido es obligatorio';
                $inputlast_name.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$inputlast_name.value.length > 4:
                $last_nameErrors.innerHTML = 'Ingresa un apellido válido';
                $inputlast_name.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $inputlast_name.classList.remove('is-invalid');
                $inputlast_name.classList.add('is-valid');
                $last_nameErrors.innerHTML = '';
                break;
        }
    })

    $phone.addEventListener('blur', () => {
        switch (true) {
            case !$phone.value.trim():
                $phoneErrors.innerHTML = 'Debes ingresar tu teléfono ';
                $phone.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$phone.value.length > 4:
                $phoneErrors.innerHTML = 'Debes ingresar un número de teléfono válido';
                $phone.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $phone.classList.remove('is-invalid');
                $phone.classList.add('is-valid');
                $phoneErrors.innerHTML = '';
                break;
        }
    })

    $email.addEventListener('blur', () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio';
                $email.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$email.value.length > 4:
                $emailErrors.innerHTML = 'El email debe ser válido';
                $email.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $email.classList.remove('is-invalid');
                $email.classList.add('is-valid');
                $emailErrors.innerHTML = '';
                break;
        }
    })

    $password.addEventListener('blur', () => {
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = 'El campo email es obligatorio';
                $password.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$password.value.length > 6:
                $passwordErrors.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres';
                $password.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $password.classList.remove('is-invalid');
                $password.classList.add('is-valid');
                $passwordErrors.innerHTML = '';
                break;
        }
    })

    $password2.addEventListener('blur', () => {
        switch (true) {
            case !$password2.value.trim():
                $password2Errors.innerHTML = 'El campo email es obligatorio';
                $password2.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$password2.value.length > 4:
                $password2Errors.innerHTML = 'El apellido debe tener ser válido';
                $password2.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $password2.classList.remove('is-invalid');
                $password2.classList.add('is-valid');
                $password2Errors.innerHTML = '';
                break;
        }
    })

    $terms.addEventListener('blur', () => {
        switch (true) {
            case !$terms.value.trim():
                $termsErrors.innerHTML = 'Debes aceptar los términos y condiciones';
                $terms.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$terms.value.length > 4:
                $termsErrors.innerHTML = '';
                $terms.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $terms.classList.remove('is-invalid');
                $terms.classList.add('is-valid');
                $termsErrors.innerHTML = '';
                break;
        }
    })

    $form.addEventListener('submit', function (event) {
        event.preventDefault();

        let error = false;
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == ""
                && elementsForm[index].name !== 'nombre'
                && elementsForm[index].apellido !== 'apellido'
            ) {
                elementsForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }
        if (!$terms.checked) {
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = 'Debes aceptar los términos y condiciones';
            error = true;
        }

        if (!error && !validationsErrors) {
            $form.submit()
        }
    })

})