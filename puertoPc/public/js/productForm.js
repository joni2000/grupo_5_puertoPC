function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $inputDescription = qs('#description'),
        $descriptionErrors = qs('#descriptionErrors'),
        $category = qs('#category'),
        $categoryErrors = qs('#categoryErrors'),
        $inputStock = qs('#stock'),
        $stockErrors = qs('#stockErrors'),
        $inputPrice = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $inputDiscount = qs('#discount'),
        $discountErrors = qs('#discountErrors'),
        $file = qs('#file'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        $submitErrors = qs('#submit-errors')
    $form = qs('#form'),
        $moreImages = qs('#more-images'),
        $mainImage = qs('#main-image'),
        $btnDelete = qs('#btn-delete')
    let validationsErrors = false;

    $inputName.addEventListener('blur', () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio';
                $inputName.classList.add('is-invalid');
                validationsErrors = true
                break;
            case !$inputName.value.length > 4:
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

    $inputDescription.addEventListener('blur', () => {
        switch (true) {
            case !$inputDescription.value.trim():
                $descriptionErrors.innerHTML = 'Debes agregar una descripción';
                $inputStock.classList.add('is-invalid');
                validationsErrors = true
                break;
            default:
                $inputDescription.classList.remove('is-invalid');
                $inputDescription.classList.add('is-valid');
                $descriptionErrors.innerHTML = '';
                break;
        }
    })

    $category.addEventListener('blur', () => {
        switch (true) {
            case !$category.value.trim():
                $categoryErrors.innerHTML = 'Debes elegir una categoría';
                $category.classList.add('is-invalid');
                validationsErrors = true
                break;
            default:
                $category.classList.remove('is-invalid');
                $category.classList.add('is-valid');
                $categoryErrors.innerHTML = '';
                break;
        }
    })

    $inputStock.addEventListener('blur', () => {
        switch (true) {
            case !$inputStock.value.trim():
                $stockErrors.innerHTML = 'Debes asignar un Stock válido';
                $inputStock.classList.add('is-invalid');
                validationsErrors = true
                break;
            default:
                $inputStock.classList.remove('is-invalid');
                $inputStock.classList.add('is-valid');
                $stockErrors.innerHTML = '';
                break;
        }
    })

    $inputPrice.addEventListener('blur', () => {
        switch (true) {
            case !$inputPrice.value.trim():
                $priceErrors.innerHTML = 'Debes ingresar un precio';
                $inputPrice.classList.add('is-invalid');
                validationsErrors = true
                break;
            default:
                $inputPrice.classList.remove('is-invalid');
                $inputPrice.classList.add('is-valid');
                $priceErrors.innerHTML = '';
                break;
        }
    })

    $form.addEventListener('submit', function (event) {
        event.preventDefault()

        let error = false;
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == ''
                && elementsForm[index].type !== 'file') {
                elementsForm[index].classList.add('is-invalid');
                $submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true
            }
        }

        if (!error && !validationsErrors) {
            $form.submit()
        }

    })

    $file.addEventListener('change', function () {
        let filePath = $file.value; //captura el valor del input
        let allowedExtension = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        if (!allowedExtension.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        } else {
            //Image preview
            console.log($file.files)
            if ($file.files && $file.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    $imgPreview.innerHTML += `<img src="${e.target.result}" alt="">`;
                    $imgPreview.classList.add('border');
                    $mainImage.style.display = 'none'
                    $moreImages.style.display = 'block';
                };


                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid');

                $btnDelete.onmouseover = () => console.log('funciona')
            }
        }
    })


})
