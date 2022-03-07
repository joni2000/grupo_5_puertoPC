function qs(element) {
    return document.querySelector(element)
}

let $inputfirst_name = qs('#first_name'),
    $first_nameErrors = qs('#first_nameErrors'),
    $inputlast_name = qs('#last_name'),
    $last_nameErrors = qs('#last_nameErrors'),
    $address = qs('#address'),
    $addressErrors = qs('#addressErrors'),
    $email = qs('#email'),
    $emailErrors = qs('emailErrors'),
    $password = qs('#pasword'),
    $passwordErrors = qs('#passwordErrors'),
    $password2 = qs('#password2'),
    $password2Errors = qs('#password2Errors'),
    $terms = qs('#terms'),
    $termsErrors = qs('#termsErrors'),
    $imagePreview = qs('#img-preview')

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
            $last_nameErrors.innerHTML = 'El apellido debe tener mas de 2 caracteres';
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

$email.addEventListener('blur', () => {
    switch (true) {
        case !$email.value.trim():
            $emailErrors.innerHTML = 'El campo email es obligatorio';
            $email.classList.add('is-invalid');
            validationsErrors = true
            break;
        case !$email.value.length > 4:
            $emailErrors.innerHTML = 'El apellido debe tener ser válido';
            $email.classList.add('is-invalid')
            validationsErrors = true;
            break;
        default:
            $inputlast_name.classList.remove('is-invalid');
            $inputlast_name.classList.add('is-valid');
            $last_nameErrors.innerHTML = '';
            break;
    }
})

