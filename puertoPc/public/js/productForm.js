function qs (element) {
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputDescription = qs('#description'),
    $descriptionErrors = qs('#descriptionErrors'),
    $category = qs('#category'),
    $categoryErrors = qs('#categoryErrors'),
    $inputStock = qs('#stock'),
    $stockErrors = qs('stockErrors'),
    $inputPrice = qs('#price'),
    $priceErrors = qs('#priceErrors'),
    $inputDiscount = qs('#discount'),
    $discountErrors = qs('#discountErrors'),
    $file = qs('#file'),
    $fileErrors = qs('#fileErrors'),
    $imagePreview = qs('#img-preview')
    
    let validationsErrors = false;
    
    $inputName.addEventListener('blur', () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio';
                $inputName.classList.add('is-invalid');
                validationsErrors = true
                break;
            case $inputName.value.length > 4:
                $nameErrors.innerHTML = 'El nombre debe tener mas de 4 caracteres';
                $inputName.classList.add('is-invalid')
                validationsErrors = true;
                break;
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = '';
                break;
        }
    })

    $inputDescription.addEventListener('blur', ()=> {
        switch (true) {
            case !$inputDescription.value.trim():
                $descriptionErrors.innerHTML = 'Debes agregar una descripción';
                $inputName.classList.add('is-invalid');
                validationsErrors = true
                break;
            default:
                break;
        }
    })

})
