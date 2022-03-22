function qs(element) {
    return document.querySelector(element)
}
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
        $changeFile = qs('#change-file'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        $selectImage = qs('#select-image'),
        $iconImage = qs('#icon-image'),
        $iconArrows = qs('#icon-arrows'),
        $submitErrors = qs('#submit-errors'),
        $form = qs('#form'),
        $moreImages = qs('#more-images'),
        $mainImage = qs('#main-image'),
        $btnDelete = qs('#btn-delete')
    let validationsErrors = false;

    

    $inputName.addEventListener('blur', () => {
        console.log($inputName.value.length)
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
                validationsErrors = false
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
                validationsErrors = false
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
                validationsErrors = false
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
                validationsErrors = false
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
                validationsErrors = false
                $priceErrors.innerHTML = '';
                break;
        }
    })

    $form.addEventListener('submit', function (event) {
        event.preventDefault()

        
        let error = false;
        let elementsForm = this.elements;

        console.log(validationsErrors, error)
        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == ''
                && elementsForm[index].type !== 'file') {
                elementsForm[index].classList.add('is-invalid');
                $submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true
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
                        validationsErrors = false
                        $nameErrors.innerHTML = '';
                        break;
                }
                switch (true) {
                    case !$inputDescription.value.trim():
                        $descriptionErrors.innerHTML = 'Debes agregar una descripción';
                        $inputStock.classList.add('is-invalid');
                        validationsErrors = true
                        break;
                    default:
                        $inputDescription.classList.remove('is-invalid');
                        $inputDescription.classList.add('is-valid');
                        validationsErrors = false
                        $descriptionErrors.innerHTML = '';
                        break;
                }
                switch (true) {
                    case !$category.value.trim():
                        $categoryErrors.innerHTML = 'Debes elegir una categoría';
                        $category.classList.add('is-invalid');
                        validationsErrors = true
                        break;
                    default:
                        $category.classList.remove('is-invalid');
                        $category.classList.add('is-valid');
                        validationsErrors = false
                        $categoryErrors.innerHTML = '';
                        break;
                }
                switch (true) {
                    case !$inputStock.value.trim():
                        $stockErrors.innerHTML = 'Debes asignar un Stock válido';
                        $inputStock.classList.add('is-invalid');
                        validationsErrors = true
                        break;
                    default:
                        $inputStock.classList.remove('is-invalid');
                        $inputStock.classList.add('is-valid');
                        validationsErrors = false
                        $stockErrors.innerHTML = '';
                        break;
                }
                switch (true) {
                    case !$inputPrice.value.trim():
                        $priceErrors.innerHTML = 'Debes ingresar un precio';
                        $inputPrice.classList.add('is-invalid');
                        validationsErrors = true
                        break;
                    default:
                        $inputPrice.classList.remove('is-invalid');
                        $inputPrice.classList.add('is-valid');
                        validationsErrors = false
                        $priceErrors.innerHTML = '';
                        break;
                }

            }
        }

        if (!error && !validationsErrors) {
            $form.submit()
        }

    })

    const addImage = ()=> {
        let allowedExtension = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
         
        let flag = true //banderita para que se ejecute solo una vez
        for(let i = 0; i < $file.files.length; i++){
            let file = $file.files[i];
            let fileName = file.name;
            if(!allowedExtension.test(fileName)){
                $fileErrors.style.display = 'block';
                $fileErrors.innerHTML = 'Solo archivos .jpg - .jpeg - .png - .gif';
                $file.value = "";
            }else{
                if( flag == true) {
                    $imgPreview.classList.add('border')
                    $iconImage.innerHTML = 'Cambiar imagenes'
                    $selectImage.style.height = '4rem'

                    flag = false 
                }
                
                $fileErrors.innerHTML = '';
            }
        }

        if($file.files.length < 6){
            let images = [];
            $imgPreview.innerHTML = '';
            for(i = 0; i < $file.files.length; i++){
                images.push({
                    "name": $file.files[i].name,
                    "url": URL.createObjectURL($file.files[i]),
                    "file": $file.files[i],
                })
            }

            images.forEach((i) => {
                $imgPreview.innerHTML += `
                <img src="`+ i.url +`" alt="Image">
                `
            })
        }
    }
    