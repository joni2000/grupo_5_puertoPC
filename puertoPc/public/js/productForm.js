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
$stockErrors = qs('stockErrors'),
$inputPrice = qs('#price'),
$priceErrors = qs('#priceErrors'),
$inputDiscount = qs('#discount'),
$discountErrors = qs('#discountErrors'),
$file = qs('#file'),
$fileErrors = qs('#fileErrors'),
$imagePreview = qs('#img-preview')